<template>
    <div>
        <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
            <div class="navbar-wrapper">
                <div class="navbar-container content">
                    <div class="navbar-collapse" id="navbar-mobile">
                        <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                            <ul class="nav navbar-nav">
                                <li class="nav-item mobile-menu d-xl-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ficon feather icon-menu"></i></a></li>
                            </ul>
                            <button class="btn btn-success btn-sm" v-if="$page.auth.user.role == 'super-admin' || $page.auth.user.role == 'admin' "> {{ $page.auth.user.role }}  {{$page.auth.user.ext_name }}</button>
                            <button class="btn btn-success btn-sm" v-else>{{ $page.auth.user.extension_name.toUpperCase() }} </button>
                        </div>
                        <ul class="nav navbar-nav float-right">
                            <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                    <div class="user-nav d-sm-flex d-none"><span class="user-name text-bold-600">{{ $page.auth.user.name }}</span><span class="user-status">Available</span></div><span>
                                        <img v-if="$page.auth.user.image != ''" class="round" :src="'/'+$page.auth.user.image" alt="avatar" height="40" width="40" />
                                        <img v-else class="round" :src="'/images/logo.png'" alt="avatar" height="40" width="40" />
                                        </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <inertia-link href="/profile" class="dropdown-item">
                                        <i class="feather icon-users"></i>
                                        Edit Profile
                                    </inertia-link>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#" @click="handleLogout"><i class="feather icon-power"></i> Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')    }),
    methods: {
       async handleLogout(){
           await  axios.post('/logout',{});
           window.location.href = "/";
        }
    },
}
</script>
