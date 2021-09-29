<template>
<div>
  <layout>
      <div class="pull-right">
            <inertiaLink href="/add/course" class="btn btn-primary" v-if="is('super-admin')">
                <i class="feather icon-home"></i> UPLOAD COURSE
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
        <div class="row" id="slide-in">
            <div class="col-xl-4 col-md-4 col-sm-12" v-for="(course, key) in courses" v-bind:key="course.id">
                <div class="card">
                    <div class="card-content">
                        <img class="card-img-top img-fluid" :src="course.course_img" :alt="course.course_code" />
                        <div class="card-body">
                            <h4 class="card-title">{{ course.course_title }} (<small class="text-muted font-small-3">{{ course.course_code }}</small>)</h4>
                            <p class="card-text">{{ course.course_description }}</p>
                            <a href="#" class="btn btn-outline-primary waves-effect waves-light" v-if="is('member')">Start Course</a>
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
            courses: Array,
        },
        data (){
            return {
                compoName : 'Courses',
                loader : false,
                addEdit : '',
                form: {
                    course_code: '',
                    course_title: '',
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
            deleteCourse(id) {
                this.$swal({
                    title: 'Delete Course?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/course/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('course');

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
                axios.post("/course/add", this.form)
                .then(response => {
                toastr.success(response.data.success, 'Success');
                $('#addCourseModal').modal('hide');
                    this.$inertia.visit('course');
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });

            },

            currentRec(course){
                this.addEdit = 'Edit';
                this.form = course;
            },

            clearRec(){
                this.addEdit = 'Add';
                this.form = {};
            }
        },
    }
</script>


