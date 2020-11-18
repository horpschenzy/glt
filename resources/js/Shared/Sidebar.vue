<template>
    <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a class="navbar-brand" href="">
                        <!-- <div><img src="@../images/logo/gltlogo.png" height=50px alt="GLT-CIS"></div> -->
                        <h2 class="brand-text mb-0">GLT-CIS</h2>
                    </a></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary" data-ticon="icon-disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class="nav-item">
                    <inertia-link href="/dashboard" v-if="is('admin | head-of-ministry | ahom | super-admin')">
                        <i class="feather icon-home"></i><span class="menu-title" data-i18n="">Dashboard</span>
                    </inertia-link>
                </li>
                <li class="nav-item ">
                    <inertia-link href="/extension" v-if="is('super-admin')">
                        <i class="feather icon-map"></i><span class="menu-title" data-i18n="">Extension</span>
                    </inertia-link>
                </li>
                <li class="nav-item" v-if="is('super-admin')">
                        <inertia-link href="/members" class="">
                            <i class="feather icon-user-plus"></i><span class="menu-title" data-i18n="">Member</span>
                        </inertia-link>
                </li>
                <li class="nav-item" v-if="is('admin | head-of-ministry | ahom | follow-up')">
                        <inertia-link href="/members" class="">
                            <i class="feather icon-user-plus"></i><span class="menu-title" data-i18n="">Guest</span>
                        </inertia-link>
                </li>

                <li class="nav-item">
                    <inertia-link v-if="is('super-admin')" href="/ministry"><i class="feather icon-shield"></i><span class="menu-title" data-i18n="">Ministry</span></inertia-link>
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

                <li class="nav-item">

                    <inertia-link v-if="is('head-of-ministry | ahom | follow-up')" href="/help"><i class="feather icon-play"></i>
                        <span class="menu-title" data-i18n="">Need Help ?</span></inertia-link>
                </li>

                <li class="nav-item">
                        <inertia-link v-if="is('admin|super-admin')" href="/help"><i class="feather icon-play"></i>
                        <span class="menu-title" data-i18n="">Questions </span></inertia-link>
                </li>
                <!-- <li class="nav-item ">
                    <a href="/"><i class="feather icon-layers"></i><span class="menu-title" data-i18n="">Organs</span></a>
                    <ul class="menu-content">
                        <li class="">

                            <a href=""><i class="feather icon-shield"></i><span class="menu-title" data-i18n="">Ministry</span></a>
                        </li>
                        <li class="">
                            <a href=""><i class="feather icon-play"></i>
                            <span class="menu-title" data-i18n="">Unit</span></a>
                        </li>
                        <li class="">
                            <a href=""><i class="feather icon-users"></i>
                            <span class="menu-title" data-i18n="">Committee</span></a>
                        </li>
                        <li class="">
                            <a href="#"><i class="feather icon-users"></i>
                            <span class="menu-title" data-i18n="">Cell</span></a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item ">
                    <a href="">
                        <i class="feather icon-calendar"></i>
                        <span class="menu-title" data-i18n="">Events</span>
                    </a>
                </li>

                <li class="nav-item ">
                    <a href="#">
                        <i class="feather icon-file"></i>
                        <span class="menu-title" data-i18n="">Reports</span>
                    </a>
                    <ul class="menu-content">
                        <li class="">
                            <a href="">
                                <i class="feather icon-play"></i>
                                <span class="menu-title" data-i18n="">Service Report</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="">
                                <i class="feather icon-users"></i>

                                <span class="menu-title" data-i18n="">Leaders Report</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="">
                                <i class="feather icon-users"></i>
                                <span class="menu-title" data-i18n="">Financial Report</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="">
                                <i class="feather icon-users"></i>
                                <span class="menu-title" data-i18n="">SMR Report</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item ">
                    <a href="/">
                        <i class="feather icon-dollar-sign"></i>
                        <span class="menu-title" data-i18n="">Funding</span>
                    </a>

                    <ul class="menu-content">
                        <li class="">
                            <a href="#">
                                <i class="feather icon-shield"></i>
                                <span class="menu-title" data-i18n="">Request</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <i class="feather icon-play"></i>
                                <span class="menu-title" data-i18n="">Reconciliation</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href=""><i class="feather icon-check-square"></i><span class="menu-title" data-i18n="">Attendance</span></a>
                </li>

                <li class="nav-item ">
                    <a href="">
                        <i class="feather icon-mail"></i>
                        <span class="menu-title" data-i18n="">Ticket</span>
                    </a>
                </li>
                <li class="nav-item ">
                    <a href="">
                        <i class="feather icon-settings"></i>
                        <span class="menu-title" data-i18n="">Settings</span>
                    </a>
                </li> -->

            </ul>
        </div>
    </div>
</template>
<script>
export default {

    props: {
        currentUrl: 'window.location.pathname',
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
