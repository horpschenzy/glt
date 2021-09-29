<template>
    <layout>
        <title-bar :name="compoName"></title-bar>
        <!-- BEGIN: Content-->
        <section id="page-account-settings">
            <div class="row">
                <!-- left menu section -->
                <div class="col-md-3 mb-2 mb-md-0">
                    <ul class="nav nav-pills flex-column mt-md-0 mt-1">
                        <li class="nav-item">
                            <a class="nav-link d-flex py-75 active"  id="account-pill-general"  data-toggle="pill" href="#account-vertical-general" aria-expanded="true">
                                <i class="feather icon-globe mr-50 font-medium-3"></i>
                                General
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex py-75" id="account-pill-password" data-toggle="pill" href="#account-vertical-password" aria-expanded="false">
                                <i class="feather icon-lock mr-50 font-medium-3"></i>
                                Change Password
                            </a>
                        </li>
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link d-flex py-75" id="account-pill-info" data-toggle="pill" href="#account-vertical-info" aria-expanded="false">-->
<!--                                <i class="feather icon-info mr-50 font-medium-3"></i>-->
<!--                                Info-->
<!--                            </a>-->
<!--                        </li>-->



                    </ul>
                </div>
                <!-- right content section -->
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane active" id="account-vertical-general" aria-labelledby="account-pill-general" aria-expanded="true">
                                        <form action="" method="POST" action="#" @submit.prevent="submit">
                                            <div class="media">
                                                <a href="javascript: void(0);">

                                                    <img v-if="member.image !== '' || member.image !==  null " height="150" width="150" :src="member.image" alt="">
                                                    <img  v-else-if="users.image !== '' || users.image !==  null " :src="users.image" height="150" width="150" alt="">
                                                    <img  v-else :src="'/images/logo.png'" height="150" width="150" alt="">
                                                </a>
                                                <div class="media-body mt-75">
                                                    <div class="col-12 px-0 d-flex flex-sm-row flex-column justify-content-start">
                                                        <label class="btn btn-sm btn-primary ml-50 mb-50 mb-sm-0 cursor-pointer waves-effect waves-light" for="pictureFile">Upload new photo</label>
                                                        <input type="file"
                                                               id="pictureFile"
                                                               class="custom-file-input"
                                                               accept="image/*"
                                                               data-default-file=""
                                                               data-height="200"
                                                               data-max-file-size="5M"
                                                               data-width="100"
                                                               data-allowed-file-extensions="jpg jpeg gif png rpg jfif"
                                                               @change="onImageChange"
                                                               hidden="">
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <label for="account-username">First Name</label>
                                                                <input type="text" class="form-control" v-model="form.first_name" id="account-username" placeholder="First Name"  required="" >
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <label for="account-name">Last Name</label>
                                                                <input type="text" class="form-control" v-model="form.last_name" id="account-name" placeholder="Last Name"  required="" >
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <label for="account-name">Other Name </label>
                                                                <input type="text" class="form-control" v-model="form.other_names"  placeholder="Last Name">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <label for="account-name"> UserName </label>
                                                                <input type="text" class="form-control" v-model="form.username"  placeholder="Phone Number"  required="" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <label for="account-name">Phone Number </label>
                                                                <input type="text" class="form-control" v-model="form.phone_number"  placeholder="Phone Number"  required="" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <label for>E-mail</label>
                                                                <input type="email" id="email" v-model="form.email_address" placeholder="Enter Email Address"  class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <div class="controls">
                                                                <label for="">Date of Birth</label>
                                                                <input v-model="form.dob" type="date" class="form-control" placeholder="DD/MM/YYYY" value="" required>

                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="col-12 d-flex flex-sm-row flex-column justify-content-end">
                                                        <button type="submit" class="btn btn-primary mr-sm-1 mb-1 mb-sm-0 waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Save
                                                            </button>
                                                    </div>
                                                </div>
                                        </form>
                                    </div>




                                    <div class="tab-pane fade" id="account-vertical-password" role="tabpanel" aria-labelledby="account-pill-password" aria-expanded="false">
                                        <form  action="" method="POST" action="#" @submit.prevent="changePassword">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <div class="controls">
                                                            <label >Old Password</label>
                                                            <input v-model="form.old_password" type="password" class="form-control"  required="" placeholder="Old Password" >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <div class="controls">
                                                            <label >New Password</label>
                                                            <input type="password"  v-model="form.password"  class="form-control" placeholder="New Password" required="" >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <div class="controls">
                                                            <label>Retype New
                                                                Password</label>
                                                            <input type="password" v-model="form.password_confirmation" class="form-control" required="" placeholder="New Password">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 d-flex flex-sm-row flex-column justify-content-end">
                                                    <button type="submit" class="btn btn-primary mr-sm-1 mb-1 mb-sm-0 waves-effect waves-light">
                                                        <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>
                                                        Change Password
                                                        </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </layout>
</template>

<script>
import TitleBar from '@/Shared/TitleBar';
import Layout from '@/Shared/Layout'

export default {
    components: {
        Layout,
        TitleBar,
    },
    props: {
        users: Object,
        member: Object
    },
    data (){
        return {
            compoName : 'Profile',
            loader : false,
            form: {
                first_name: '',
                last_name:'',
                other_names:'',
                dob:'',
                address:'',
                phone_number:'',
                email_address:'',
                image:'',
                id: '',
                password: '',
                old_password: '',
                password_confirmation:'',
                username: '',
            },
        }
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        })
    },

    created() {
       this.form.first_name = this.member.first_name != null ? this.member.first_name : '';
       this.form.last_name  = this.member.last_name != null ? this.member.last_name : '';
        this.form.other_names  = this.member.other_names != null ? this.member.other_names : '';
        this.form.username    = this.users.username;
        this.form.dob       = this.member.dob != null ? this.member.dob : '';
       this.form.address   = this.member.address != null ? this.member.address : '';
       this.form.email_address = this.member.email_address != null ? this.member.email_address : '';
       this.form.phone_number = this.member.phone_number;
       this.form.id    = this.member.id;
    },

    methods: {
        formatString(val){
            var first = val.replace("-", " ");
            var second =  first.replace("-", " ");
            return second.toUpperCase()

        },
        onImageChange(e) {
            let files = e.target.files || e.dataTransfer.files;

            return this.createImage(files[0]);

        },
        createImage(file) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.form.image = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        submit() {
            this.loader = true;
            axios.post("/profile-update", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    this.$inertia.visit('profile');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },

        changePassword() {
            this.loader = true;
            axios.post("/change-password", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    this.$inertia.visit('profile');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },

        upload() {
            this.loader = true;
            axios.post("/profile-picture", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    $('#EditPictureModal').modal('hide');
                    this.$inertia.visit('profile');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },


        currentRec(member){
            this.addEdit = 'Edit';
            this.form.id = member.id;
            this.form = member;


        },
    },



}
</script>


