<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Inertia\Response;
use Inertia\ResponseFactory;

class RoleController extends Controller
{
    /**
     * @return Response|ResponseFactory
     */
    public function index()
    {
        $roles = Role::all();
        return inertia( 'Admin/Roles/Index' )
            ->with( 'roles', $roles );
    }// index
}
