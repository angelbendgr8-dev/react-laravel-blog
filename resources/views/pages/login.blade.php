@extends('layouts.main')

@section('content')
    <!-- ##### Breadcrumb Area Start ##### -->
    <section class="breadcrumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/40.jpg);">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcrumb-content">
                        <h2>Login</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ##### Breadcrumb Area End ##### -->

    <!-- ##### Login Area Start ##### -->
    <div class="mag-login-area py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6">
                    <div class="login-content bg-white p-30 box-shadow">
                        <!-- Section Title -->
                        <div class="section-heading">
                            <h5>Great to have you back!</h5>
                        </div>

                        <form action="{{ route('login') }}" method="post">
                            @csrf
                            <div class="form-group">
                                <input type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" id="exampleInputEmail1" placeholder="Email or User Name">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control @error('password') is-invalid @enderror" name="password" id="exampleInputPassword1" placeholder="Password">
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
                                    <label class="custom-control-label" for="customControlAutosizing">Remember me</label>
                                </div>
                            </div>
                            <button type="submit" class="btn offset-4 mag-btn mt-30">Login</button>
                            <span class=""> <p class="offset-4" >Become an Affiliate  <a href="{{ route('register') }}" class="text-primary" style="text-decoration: underline;">Join Us</a></p></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection