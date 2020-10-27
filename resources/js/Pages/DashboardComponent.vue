<template>
<div>
  <layout>

        <div class="pull-right">
            <inertiaLink href="/dashboard/home" class="btn btn-primary" v-if="$page.auth.user.role == 'super-admin'">
                <i class="feather icon-home"></i> BACK
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
        <div class="row">
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (stats.existing) ? stats.existing : 0}}</h3>
                            <p class="mb-0">Steward/Foundation school Members</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-users text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (stats.new) ? stats.new : 0}}</h3>
                            <p class="mb-0">Guests</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-users text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (stats.extensions) }}</h3>
                            <p class="mb-0">Extensions</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-home text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (0) }}</h3>
                            <p class="mb-0">Appointment Booking</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-package text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (0)}}</h3>
                            <p class="mb-0">Notifications</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-bell text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (0)}}</h3>
                            <p class="mb-0">Next Event</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-calendar text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (0) }}</h3>
                            <p class="mb-0">Prayer Requests</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-cloud text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (0) }}</h3>
                            <p class="mb-0">Testimonies</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-file-text text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </layout>
 </div>
</template>
<script>
    import Layout from '@/Shared/Layout'
    import TitleBar from '@/Shared/TitleBar'

    export default {
        components: {
            Layout,
            'title-bar' : TitleBar,
        },
        props: {
            stats: Array
        },
        data (){
            return {
                compoName : 'Dashboard',
                loader : false,
            }
        },
        mounted () {
            this.$nextTick(function() {
                selectActiveMenu();
                $('.zero-configuration').DataTable( { "aaSorting": [] } );
            })
        },

    }
</script>


