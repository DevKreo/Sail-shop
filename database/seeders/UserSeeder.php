<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            
        ]);
        $user->assignRole('user');
        $admin = User::create([
            'surname' => 'Конончук',
            'name' => 'Эдуард',
            'middle_name' => 'Валерьевич',
            'email' => 'ed.ambidexter@gmail.com',
            'phone_number' => '+80713314795',
            'password' => Hash::make('123456789')
        ]);
        $admin->assignRole('admin');
    }
}
