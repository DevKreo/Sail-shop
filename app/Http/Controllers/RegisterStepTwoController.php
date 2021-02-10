<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterStepTwoController extends Controller
{
    public function create(){
        return Inertia::render('auth.RegisterStepTwo');
    }

    public function store(Request $request){
        auth()->user()->update([
            'name' => $request->name,
            'surname' => $request->surname,
            'middle_name'=> $request->middle_name,
            'phone_number' => $request->phone_number
        ]);
        return redirect()->route('dashbord');
    }
}
