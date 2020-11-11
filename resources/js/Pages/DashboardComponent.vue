<template>
<div>
  <layout>

        <div class="pull-right">
            <inertiaLink href="/dashboard/home" class="btn btn-primary" v-if="is('super-admin')">
                <i class="feather icon-home"></i> BACK
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
        <div class="row" v-if="is('super-admin')">
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (stats.foundation) ? stats.foundation : 0}}</h3>
                            <p class="mb-0">Foundation school Members</p>
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
                            <h3 class="text-bold-600">{{ (stats.steward) ? stats.steward : 0}}</h3>
                            <p class="mb-0">Steward</p>
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
        <div class="row" v-if="is('admin')">
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (stats.foundation) ? stats.foundation : 0}}</h3>
                            <p class="mb-0">Foundation school Members</p>
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
                            <h3 class="text-bold-600">{{ (stats.steward) ? stats.steward : 0}}</h3>
                            <p class="mb-0">Steward</p>
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
        <div class="row" v-if="is('head-of-ministry | ahom ')">
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ (stats.new) ? stats.new : 0}}</h3>
                            <p class="mb-0">New Guest</p>
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
                            <h3 class="text-bold-600">{{ (stats.assigned) ? stats.assigned : 0}}</h3>
                            <p class="mb-0">Assigned Guest</p>
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
                            <h3 class="text-bold-600">{{ (stats.visits) }}</h3>
                            <p class="mb-0">Total Visits</p>
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
                            <h3 class="text-bold-600">{{ (stats.texts)}}</h3>
                            <p class="mb-0">Total Texts</p>
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
                            <h3 class="text-bold-600">{{ (stats.emails)}}</h3>
                            <p class="mb-0">Emails</p>
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
                            <h3 class="text-bold-600">{{ (stats.calls) }}</h3>
                            <p class="mb-0">Calls</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-cloud text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-sm-6 col-12">
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
            </div> -->
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
            stats: Object
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


