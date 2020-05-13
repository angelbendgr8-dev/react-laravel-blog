<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
           
                'name'  => 'Super Admin',
                'email'  => 'super@amin.com',
                'password' => Hash::make('secret123'), //secret
                // 'password'       => 'secret', //secret
                'remember_token' => Str::random(10),
                'active'         => true
            
        ]);
    }
}
