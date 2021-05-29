<template>
    <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a class="navbar-brand" href="">
                        <div>
                            <img :src="'/images/logo/gltlogo.png'" height=50px alt="GLT-CIS" v-if="$page.auth.user.choices == 'normal'">
                            <img :src="'/images/logo/glt-logo-white.png'" height=50px alt="GLT-CIS" v-else>
                        </div>
                        <!-- <h2 class="brand-text mb-0">GLT-CIS</h2> -->
                    </a></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary" data-ticon="icon-disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" v-if="$page.auth.user.choices == 'normal'" data-menu="menu-navigation">
                <li class="nav-item">
                    <inertia-link href="/member/profile" v-if="is('admin | head-of-ministry | ahom | follow-up | member')">
                        <i class="feather icon-home"></i><span class="menu-title" data-i18n="">Home</span>
                    </inertia-link>
                </li>
                <li class="nav-item">
                    <inertia-link href="/dashboard" v-if="is('admin | head-of-ministry | ahom')">
                        <i class="feather icon-home"></i><span class="menu-title" data-i18n="">Ministry</span>
                    </inertia-link>
                </li>
                <li class="nav-item">
                    <inertia-link href="/dashboard" v-if="is('super-admin')">
                        <i class="feather icon-home"></i><span class="menu-title" data-i18n="">Dashboard</span>
                    </inertia-link>
                </li>
                <li class="nav-item ">
                    <inertia-link href="/extension" v-if="is('super-admin')">
                        <i class="feather icon-map"></i><span class="menu-title" data-i18n="">Extension</span>
                    </inertia-link>
                </li>
                <li class="nav-item" v-if="is('admin | head-of-ministry | ahom | super-admin')">
                        <inertia-link href="/members" class="">
                            <i class="feather icon-user-plus"></i><span class="menu-title" data-i18n="">Member</span>
                        </inertia-link>
                </li>
                <li class="nav-item" v-if="is('follow-up')">
                        <inertia-link href="/members" class="">
                            <i class="feather icon-user-plus"></i><span class="menu-title" data-i18n="">Guest</span>
                        </inertia-link>
                </li>

                <li class="nav-item">
                    <inertia-link v-if="is('super-admin')" href="/ministry"><i class="feather icon-shield"></i><span class="menu-title" data-i18n="">Ministry</span></inertia-link>
                </li>

                <li class="nav-item">
                    <inertia-link v-if="is('super-admin')" href="/event"><i class="feather icon-calendar"></i>
                        <span class="menu-title" data-i18n="">Event</span></inertia-link>
                </li>

                <li class="nav-item">
                    <inertia-link v-if="is('super-admin | admin | follow-up | head-of-ministry | teaching-ministry | head-of-follow-up-ministry')" href="/report"><i class="feather icon-package"></i>
                        <span class="menu-title" data-i18n="">Report</span></inertia-link>
                </li>

                <li class="nav-item">
                    <inertia-link v-if="is('super-admin')" href="/unit"><i class="feather icon-play"></i>
                        <span class="menu-title" data-i18n="">Unit</span></inertia-link>
                </li>

                <li class="nav-item">
                    <inertia-link  href="/users" class="" v-if="is('admin | super-admin')">
                        <i class="feather icon-user-plus"></i><span class="menu-title" data-i18n="">Users</span>
                    </inertia-link>
                </li>

                <li class="nav-item">
                    <inertia-link v-if="is('super-admin')" href="/roles">
                        <i class="feather icon-shield"></i>
                        <span class="menu-title" data-i18n="">ACL</span>
                    </inertia-link>
                </li>

                <li class="nav-item"  v-if="is('head-of-ministry | ahom | follow-up')">
                    <inertia-link href="/help"><i class="feather icon-play"></i>
                        <span class="menu-title" data-i18n="">Need Help ?</span></inertia-link>
                </li>

                <li class="nav-item" v-if="is('admin|super-admin')">
                        <inertia-link  href="/help"><i class="feather icon-play"></i>
                        <span class="menu-title" data-i18n="">Questions </span></inertia-link>
                </li>

                <li class="nav-item " style="margin-top: 300px">
                    <a href="/foundation/dashboard"  method="get">
                        <i class="feather icon-aperture"></i>
                        <span class="menu-title" data-i18n="">Foundation Bible School</span>
                    </a>
                </li>
            </ul>
            <ul class="navigation navigation-main" id="main-menu-navigation" v-else data-menu="menu-navigation">
                <li class="nav-item">
                    <inertia-link href="/foundation/dashboard" v-if="is('admin | head-of-ministry | ahom | super-admin')">
                        <i class="feather icon-home"></i><span class="menu-title" data-i18n="">Dashboard</span>
                    </inertia-link>
                </li>
                <li class="nav-item ">
                    <inertia-link href="/course" v-if="is('super-admin')">
                        <i class="feather icon-map"></i><span class="menu-title" data-i18n="">Courses</span>
                    </inertia-link>
                </li>
                <li class="nav-item" v-if="is('super-admin')">
                        <inertia-link href="/students" class="">
                            <i class="feather icon-user-plus"></i><span class="menu-title" data-i18n="">Students</span>
                        </inertia-link>
                </li>
                <li class="nav-item" v-if="is('super-admin')">
                        <inertia-link href="/teachers" class="">
                            <i class="feather icon-user-plus"></i><span class="menu-title" data-i18n="">Teachers</span>
                        </inertia-link>
                </li>
                <li class="nav-item" v-if="is('super-admin')">
                        <inertia-link href="/announcements" class="">
                            <i class="feather icon-volume-1"></i><span class="menu-title" data-i18n="">Announcements</span>
                        </inertia-link>
                </li>



                <li class="nav-item " style="margin-top: 455px">
                    <a  href="/dashboard">
                        <i class="feather icon-aperture"></i>
                        <span class="menu-title" data-i18n="">Home</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

    props: {
        currentUrl: 'window.location.pathname',
        type: ['type'],
    },

    data: function() {

        return {

        }
    },
    mounted () {

    },


    // computed : {
    //     merchants(){
    //         return this.data;
    //     }
    // },

}


</script>
<style lang="less" scoped>

</style>
