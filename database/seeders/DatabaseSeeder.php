<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run() : void
    {
        $roles = [
            [
                'name'        => 'Admin',
                'slug'        => 'admin',
                'permissions' => json_encode( '[]' )
            ],
            [
                'name'        => 'Employer',
                'slug'        => 'employer',
                'permissions' => json_encode( '[]' )
            ],
            [
                'name'        => 'Candidate',
                'slug'        => 'candidate',
                'permissions' => json_encode( '[]' )
            ]
        ];

        foreach( $roles as $role ) {
            Role::create( $role );
        }

        User::create( [
            'first_name' => 'Fayaz',
            'last_name'  => 'Khan',
            'name'       => 'Fayaz K',
            'email'      => 'info@fayazk.com',
            'password'   => Hash::make( '@Password1' ),
            'role_id'    => Role::where( 'slug', 'admin' )->first()->id,
        ] );
        User::factory( 1000 )->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
