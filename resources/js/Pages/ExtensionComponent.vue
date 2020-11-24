<template>
<div>
  <layout>
        <title-bar :name="compoName"></title-bar>
        <div class="row" id="slide-in">
            <div class="col-12 ">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body card-dashboard mb-2">
                            <div class="pull-right">
                                <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addExtensionModal">
                                    <i class="feather icon-home"></i> Add Extension
                                </button>
                            </div>
                            <h4 class="card-title">Extension</h4>
                            <div class="table-responsive mt-2">
                                <table class="table table-hover zero-configuration">
                                    <thead>
                                        <tr>
                                            <th>Extension ID</th>
                                            <th>Image</th>
                                            <th>Extension Name</th>
                                            <th>Location</th>
                                            <th>SMR</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(extension, key) in extensions" v-bind:key="extension.id">
                                            <td>{{ key + 1 }} </td>
                                            <td class="product-img">
                                                <div class="avatar mr-1 avatar-xl">
                                                    <img v-if="extension.ext_image" :src="extension.ext_image" alt="Img">
                                                    <img v-else :src="'/images/logo/gltlogo.png'" alt="Img">
                                                </div>
                                            </td>
                                            <td>{{ extension.ext_name }}</td>
                                            <td>{{ extension.ext_location }}</td>
                                            <td>{{ extension.ext_owner}}</td>
                                            <td>{{ extension.ext_email }}</td>
                                            <td>{{ extension.ext_phone }}</td>
                                            <td>
                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(extension);" data-toggle="modal"  data-target="#addExtensionModal"><i class="feather icon-edit"></i></button>
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteExtension(extension.id);"><i class="feather icon-delete"></i></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade text-left" id="addExtensionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Extension </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                        <div class="modal-body row m-1">
                            <div class="row">
                                <div class="form-group col-6">
                                    <label for="first-name-icon">Extension Name</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="text" v-model="form.ext_name" placeholder="Extension Name" required=""  class="form-control">
                                        <div class="form-control-position">
                                        <i class="feather icon-home"></i>
                                    </div>
                                    </div>
                                </div>
                                <div class="form-group col-6">
                                    <label for="first-name-icon">Extension Phone Number</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="text" v-model="form.ext_phone"  placeholder="Extension Phone Number"  class="form-control">
                                        <div class="form-control-position">
                                        <i class="feather icon-smartphone"></i>
                                    </div>
                                    </div>
                                </div>

                                <div class="form-group col-6">
                                    <label for="email-id-icon">Extension Email</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="email" id="email" v-model="form.ext_email" placeholder="Extension Email Address"  class="form-control">
                                        <div class="form-control-position">
                                        <i class="feather icon-mail"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-6">
                                    <label for="contact-info-icon">Extension Location</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="text" id="" v-model="form.ext_location" placeholder="Extension Location"  class="form-control" >
                                        <div class="form-control-position">
                                            <i class="feather icon-navigation"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-6">
                                    <label for="contact-info-icon">Pastor in Charge</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="text" id="" v-model="form.ext_owner" placeholder="Pastor in Charge"  class="form-control" >
                                        <div class="form-control-position">
                                            <i class="feather icon-user"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-6">
                                    <label for="pictureFile">Picture</label>
                                    <div class="custom-file">
                                        <input type="file" id="pictureFile"
                                               class="custom-file-input"
                                               accept="image/*"
                                               data-default-file=""
                                               data-height="200"
                                               data-max-file-size="5M"
                                               data-width="100"
                                               data-allowed-file-extensions="jpg jpeg gif png rpg jfif"
                                               @change="onImageChange"/>
                                        <label for="pictureFile" class="custom-file-label">Upload picture</label>
                                    </div>
                                </div>
                                <input type="hidden" v-model="form.id" id="">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Save</button>
                        </div>
                    </form>
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
            extensions: Array,
        },
        data (){
            return {
                compoName : 'Extension',
                loader : false,
                addEdit : '',
                form: {
                    ext_email: '',
                    ext_phone: '',
                    ext_name: '',
                    ext_location: '',
                    ext_owner: '',
                    ext_image: '',
                    id: '',
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

            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;

                return this.createImage(files[0]);

            },
            createImage(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.form.ext_image = e.target.result;
                };

                reader.readAsDataURL(file);
            },
            deleteExtension(id) {
                this.$swal({
                    title: 'Delete Extension?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/extension/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('extension');

                        }).catch(error => {
                            toastr.error(error.response.data.error, 'Error');
                        });
                    } else {
                        this.$swal('Cancelled', 'Your file is still intact', 'info')
                    }
                })
            },

            submit() {
                this.loader = true;
                axios.post("/extension/add", this.form)
                .then(response => {
                toastr.success(response.data.success, 'Success');
                $('#addExtensionModal').modal('hide');
                    this.$inertia.visit('extension');
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });

            },

            currentRec(extension){
                this.addEdit = 'Edit';
                this.form = extension;
            },

            clearRec(){
                this.addEdit = 'Add';
                this.form = {};
            }
        },
        created() {
            this.form.image = '';
        },
    }
</script>


