<template>
    <div>
        <layout>
            <title-bar :name="compoName"></title-bar>
            <div id="user-profile">
                    <div class="row">
                        <div class="col-12">
                            <div class="profile-header mb-2">
                                <div class="relative">
                                    <div class="cover-container">
                                        <img class="img-fluid bg-cover rounded-0 w-100" :src="'/images/gltlogos.png'" alt="User Profile Image">
                                    </div>
                                    <div class="profile-img-container d-flex align-items-center justify-content-between">
                                        <!-- <img :src="'/images/profile/user-uploads/user-13.jpg'" class="rounded-circle img-border box-shadow-1" alt="Card image"> -->
                                        <img v-if="member.image !== '' || member.image !==  'null' " class="rounded-circle img-border box-shadow-1" :src="'/'+member.image" alt="">
                                        <img  v-else-if="'/'+users.image" :src="users.image" class="rounded-circle img-border box-shadow-1" alt="">
                                        <img  v-else :src="'/images/logo.png'" class="rounded-circle img-border box-shadow-1" alt="">
                                        <div class="float-right">
                                            <button type="button" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1 waves-effect waves-light">
                                                <i class="feather icon-edit-2"></i>
                                            </button>
                                            <button type="button" class="btn btn-icon btn-icon rounded-circle btn-primary waves-effect waves-light">
                                                <i class="feather icon-settings"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end align-items-center profile-header-nav">
                                    <nav class="navbar navbar-expand-sm w-100 pr-0">
                                        <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"><i class="feather icon-align-justify"></i></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav justify-content-around w-75 ml-sm-auto">
                                                <li class="nav-item px-sm-0">
                                                    <inertia-link href="/member/profile" class="nav-link font-small-3">Timeline</inertia-link>
                                                </li>
                                                <li class="nav-item px-sm-0">
                                                    <inertia-link href="/announcement" class="nav-link font-small-3">Announcement</inertia-link>
                                                </li>
                                                <li class="nav-item px-sm-0">
                                                    <inertia-link href="/ministry" class="nav-link font-small-3">Ministry</inertia-link>
                                                </li>
                                                <li class="nav-item px-sm-0">
                                                    <inertia-link href="/event" class="nav-link font-small-3">Events</inertia-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="profile-info">
                        <div class="row">
                            <div class="col-lg-3 col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>About</h4>
                                        <i class="feather icon-more-horizontal cursor-pointer"></i>
                                    </div>
                                    <div class="card-body">
                                        <div class="">
                                            <h6 class="mb-0">Name:</h6>
                                            <p>{{ member.first_name+' '+member.last_name }}</p>
                                        </div>
                                        <div class="mt-1">
                                            <h6 class="mb-0">Date Of Birth:</h6>
                                            <p>{{ member.dob }}</p>
                                        </div>
                                        <div class="mt-1">
                                            <h6 class="mb-0">Lives:</h6>
                                            <p>{{ member.address }}</p>
                                        </div>
                                        <div class="mt-1">
                                            <h6 class="mb-0">Email:</h6>
                                            <p>{{ member.email_address }}</p>
                                        </div>
                                        <div class="mt-1">
                                            <h6 class="mb-0">Phone Number:</h6>
                                            <p>{{ member.phone_number }}</p>
                                        </div>
                                        <div class="mt-1">
                                            <h3 class="mb-0">Access Code:</h3>
                                            <p class="font-large-1">{{ users.access_code }}</p>
                                        </div>
                                        <div class="mt-1">
                                            <inertia-link href="/profile" class="btn btn-primary btn-sm">
                                                Edit
                                            </inertia-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">{{ $page.auth.user.extension_name.toUpperCase() }}</h4>
                                        <h5 class="card-title">Leadership</h5>
                                    </div>
                                    <div class="card-body suggested-block">
                                        <div class="d-flex justify-content-start align-items-center mb-1" v-for="(leader,key) in leaders" :key="key">
                                            <div class="avatar mr-50">
                                                <img v-if="leader.image" :src="'/'+leader.image" alt="avtar img holder" height="35" width="35">
                                                <img v-else :src="'/images/logo.png'" alt="avtar img holder" height="35" width="35">
                                            </div>
                                            <div class="user-page-info">
                                                <p>{{ leader.name }}</p>
                                                <span class="font-small-2">{{ leader.roles[0].name }}</span>
                                            </div>
                                            <div class="ml-auto"><i class="feather icon-star"></i></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-9">
                                <template v-if="page == 'timeline'">
                                    <div class="card" style="height: 582.5px;">
                                        <div class="card-header">
                                            <h4 class="card-title">Activity Timeline</h4>
                                        </div>
                                        <div class="card-content">
                                            <div class="card-body">
                                                <ul class="activity-timeline timeline-left list-unstyled">
                                                    <li v-for="notification in notifications" :key="notification.id">
                                                        <div class="timeline-icon bg-primary">
                                                            <i class="feather icon-plus font-medium-2 align-middle"></i>
                                                        </div>
                                                        <div class="timeline-info">
                                                            <p class="font-weight-bold mb-0" v-if="notification.category == 'useractivities'">Profile Update</p>
                                                            <p class="font-weight-bold mb-0" v-else-if="notification.category == 'event'">Event Update</p>
                                                            <p class="font-weight-bold mb-0" v-else-if="notification.category == 'acl'">Role/Permission Update</p>
                                                            <span class="font-small-3">{{ notification.message }}</span>
                                                        </div>
                                                        <small class="text-muted">{{ notification.created_at }}</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template  v-else-if="page == 'event'">
                                    <div class="row">
                                    <div class="col-xl-4 col-md-4 col-sm-4" v-for="(event, key) in events" v-bind:key="key">
                                        <a :href="'/register/event/'+event.event_code" target="_blank">
                                        <div class="card">
                                            <div class="card-content">
                                                <img class="card-img-top" width="200px" height = "200px" :src="event.event_image" :alt="event.event_name" />
                                                <div class="card-body" style="height: 200px !important">
                                                    <h4 class="card-title">{{ event.event_name }}</h4>
                                                    <p class="card-text"> Start Date And Time {{ event.event_start_date }} {{  event.event_start_time }}</p>
                                                    <p class="card-text"> End Date And Time {{ event.event_end_date }} {{  event.event_start_time }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    </div>
                                </template>
                            </div>

                        </div>
                    </section>
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
        units: Array,
        users: Object,
        notifications: Array,
        member: Object,
        leaders: Array,
        events: Array,
        page: String,
    },
    data (){
        return {
            compoName : 'Member Profile',
            loader : false,
            addEdit : '',
            form: {

            },
        }
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        })
    },

    methods: {
        deleteUnit() {

        },
        submit() {


        },

        currentRec(unit){
            this.addEdit = 'Edit';
            this.form = unit;
        },

        clearRec(){
            this.addEdit = 'Add';
            this.form = {};
        }
    },

}
</script>


