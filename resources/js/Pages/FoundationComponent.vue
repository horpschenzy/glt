<template>
<div>
  <layout>

        <!-- <div class="pull-right">
            <inertiaLink href="/dashboard/home" class="btn btn-primary" v-if="is('super-admin')">
                <i class="feather icon-home"></i> BACK
            </inertiaLink>
        </div> -->
        <title-bar :name="compoName"></title-bar>
        <div class="row" v-if="is('super-admin')">
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card mb-1">
                    <div class="card-header d-flex align-items-start pb-2">
                        <div>
                            <h3 class="text-bold-600">{{ stats.newStudents }}</h3>
                            <p class="mb-0">New Students</p>
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
                            <h3 class="text-bold-600">{{ stats.awaitingStudents }}</h3>
                            <p class="mb-0">Awaiting Students</p>
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
                            <h3 class="text-bold-600">{{ stats.allStudents }}</h3>
                            <p class="mb-0">All Students</p>
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
                            <h3 class="text-bold-600">{{ stats.allTeachers }}</h3>
                            <p class="mb-0">All Teachers</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50">
                            <div class="avatar-content">
                                <i class="feather icon-users text-primary font-medium-5"></i>
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


