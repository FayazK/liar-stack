<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UsersResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return inertia( 'Admin/Users/Index' );
    }

    public function listing()
    {
        $users = User::query()->paginate();
        return UsersResource::collection( $users );
    }
}
