<template>
    <layout>
        <title-bar :name="compoName"></title-bar>
        <section class="users-edit">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <div class="pull-right">
                            <inertia-link href="/members" class="btn btn-primary">
                                <i class="feather icon-home"></i> Back
                            </inertia-link>
                        </div>
                        <ul class="nav nav-tabs mb-3" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center active" id="account-tab" data-toggle="tab" href="#account" aria-controls="account" role="tab" aria-selected="true">
                                    <i class="feather icon-user mr-25"></i><span class="d-none d-sm-block">Personal Information</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center disabled" id="careeer-tab" data-toggle="tab" href="#career" aria-controls="career" role="tab" aria-selected="false">
                                    <i class="feather icon-info mr-25"></i><span class="d-none d-sm-block">Career/Discipline</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center disabled" id="information-tab" data-toggle="tab" href="#information" aria-controls="information" role="tab" aria-selected="false">
                                    <i class="feather icon-info mr-25"></i><span class="d-none d-sm-block">Parent Information</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center disabled" id="social-tab" data-toggle="tab" href="#social" aria-controls="social" role="tab" aria-selected="false">
                                    <i class="feather icon-share-2 mr-25"></i><span class="d-none d-sm-block">Unit/Ministry/Department</span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="account" aria-labelledby="account-tab" role="tabpanel">
                                <form @submit.prevent="submit">
                                    <div class="row">
                                        <div class="col-12 col-sm-6">
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Title</label>
                                                    <select class="form-control" required v-model="form.title">
                                                        <option value="">Select Title</option>
                                                        <option value="Pastor">Pastor</option>
                                                        <option value="Assistant Pastor">Assistant Pastor</option>
                                                        <option value="Head of Ministry">Head of Ministry</option>
                                                        <option value="Assistant Head of Ministry ">Assistant Head of Ministry </option>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Mr.s">Mrs.</option>
                                                        <option value="Dr.">Dr.</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>First Name</label>
                                                    <input v-model="form.first_name" type="text" class="form-control" placeholder="First Name" value="" required data-validation-required-message="This username field is required">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Last Name</label>
                                                    <input v-model="form.last_name" type="text" class="form-control" placeholder="Last Name" value="" required data-validation-required-message="This email field is required">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Other Names</label>
                                                    <input v-model="form.other_names" type="text" class="form-control" placeholder="Other Name" value="" data-validation-required-message="This name field is required">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>DOB </label>
                                                    <input v-model="form.dob" type="date" class="form-control" placeholder="DD/MM/YYYY" value="" required data-validation-required-message="This email field is required">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3">
                                                        <label for="country">Country</label>
                                                        <select class="form-control" required v-model="form.country" @change="getStates">
                                                            <option value="">Select Country</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="United States">United States</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label for="state">State</label>
                                                        <select class="form-control" required v-model="form.state">
                                                            <option value="">Select State</option>
                                                            <option v-for="(state, key) in states" :key ="key"  :value="state">{{ state }}</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label for="city">City</label>
                                                        <input type="text" id="City" placeholder="City" v-model="form.city" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label for="validationTooltip05">Zip Code</label>
                                                        <input type="text" id="Zipcode" placeholder="Zip Code" name="Zipcode" v-model="form.zipcode" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Phone Number</label>
                                                    <input v-model="form.phone_number" type="text" class="form-control" placeholder="Phone Number" value="" required data-validation-required-message="This email field is required">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>E-mail</label>
                                                    <input v-model="form.email_address" type="email" class="form-control" placeholder="Email"  required data-validation-required-message="This email field is required">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Marital Status</label>
                                                <select class="form-control" required v-model="form.marital_status">
                                                    <option value="">Select Status</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Separated">Separated</option>
                                                    <option value="Divorced">Divorced</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
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
                                            <div class="form-group">
                                                <label>Address</label>
                                                <textarea v-model="form.address" id="Address" rows="5" value="" class="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1">
                                        <button type="submit" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Save and Continue</button>
                                        <button type="reset" class="btn btn-outline-warning">Reset</button>
                                    </div>
                                </form>
                                <!-- users edit account form ends -->
                            </div>
                            <div class="tab-pane " id="career" aria-labelledby="career-tab" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card overflow-hidden">
                                            <div class="card-content">
                                                <div class="card-body">
                                                    <ul role="tablist" class="nav nav-tabs">
                                                        <li class="nav-item"><a id="home-tab" data-toggle="tab" href="#home" aria-controls="home" role="tab" aria-selected="true" class="nav-link">Student</a></li>
                                                        <li class="nav-item"><a id="profile-tab" data-toggle="tab" href="#profile" aria-controls="profile" role="tab" aria-selected="false" class="nav-link active">Professional</a></li>
                                                        <li class="nav-item"><a href="#" class="nav-link disabled">NYSC Corper</a></li>
                                                        <li class="nav-item"><a id="about-tab" data-toggle="tab" href="#about" aria-controls="about" role="tab" aria-selected="false" class="nav-link">Enterprenuer</a></li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div id="home" aria-labelledby="home-tab" role="tabpanel" class="tab-pane">
                                                            <div class="form-row">
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="nameofSchool">Name of School</label> <input type="text" id="School" placeholder="School Name" name="School" value="" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid School Name.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="courseofStudy">Course of Study</label> <input type="text" id="courseofStudy" placeholder="Course of Study" name="courseofStudy" value="" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Course of Study.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="hostelAddress">Hostel Address</label> <input type="text" id="hostelAddress" placeholder="Hostel Address" name="hostelAddress" value="" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Hostel Address.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="homeAddress">Home Address</label> <input type="text" id="homeAddress" placeholder="Residentail Address" name="homeAddress" value="" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Home Address.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-row">
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="level">Cuurrent Level</label>
                                                                    <select id="level" name="level" class="custom-select form-control">
                                                                        <option value="">Select</option>
                                                                        <option value="Level 1">Level 1</option>
                                                                        <option value="Level 2">Level 2</option>
                                                                        <option value="Level 3">Level 3</option>
                                                                        <option value="Level 4">Level 4</option>
                                                                        <option value="Level 5">Level 5</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="educationalCategory">Educational Category</label>
                                                                    <select id="Category" name="Category" class="custom-select form-control">
                                                                        <option value="">Select</option>
                                                                        <option value="Undergraduate">Undergraduate</option>
                                                                        <option value="Diploma">Diploma</option>
                                                                        <option value="Post graduate">Post Graduate Diploma</option>
                                                                        <option value="Masters">Masters</option>
                                                                        <option value="Doctorate">Doctorate</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <div class="form-group"><label for="foundationstart">Foundation School Startdate</label> <input type="text" name="startdate" class="form-control pickadate-months-year"></div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <div class="form-group"><label for="firstName1">Foundation School Enddate</label> <input type="text" name="enddate" class="form-control pickadate-months-year"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="profile" aria-labelledby="profile-tab" role="tabpanel" class="tab-pane active">
                                                            <div class="form-row">
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip03">Occupation</label> <input type="text" id="Occupation2" placeholder="Occupation" name="Occupation2" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Occupation.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip03">Employer</label> <input type="text" id="Employer" placeholder="Employer" name="Employer" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Employer.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip04">Office Address</label> <input type="text" id="Address" placeholder="Address" name="officeAddress" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Employer Address.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip05">Position</label> <input type="text" id="Position" placeholder="Position" name="Position" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Position.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="about" aria-labelledby="about-tab" role="tabpanel" class="tab-pane">
                                                            <div class="form-row">
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip03">Name of Business/Service</label> <input type="text" id="Businessname" placeholder="Name of Business/Service" name="Businessname" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Business/Service Name.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip03">Nature of Business</label> <input type="text" id="natureofbusiness" placeholder="Nature of BusinessCourse of Study" name="natureofbusiness" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid nature of Business.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip04">Business Address</label> <input type="text" id="businessAddress" placeholder="Business Address" name="businessAddress" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Business Address.
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-3">
                                                                    <label for="validationTooltip05">Position</label> <input type="text" id="Position1" placeholder="Position" name="Position1" class="form-control">
                                                                    <div class="invalid-tooltip">
                                                                        Please provide a valid Position.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-12 col-12">
                                        <button type="submit" class=" float-right btn btn-primary mr-1 mb-1 waves-effect waves-light">Save and Continue</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="information" aria-labelledby="information-tab" role="tabpanel">
                                <!-- users edit Info form start -->
                                <form novalidate>
                                    <div class="row mt-1">
                                        <div class="col-12 col-sm-6">
                                            <h5 class="mb-1"><i class="feather icon-user mr-25"></i>Parent Information</h5>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <div class="controls">
                                                            <label>Father's Name</label>
                                                            <input type="text" class="form-control" required placeholder="Father's Name" >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Fathers Occupation</label>
                                                    <input type="text" class="form-control" value="" placeholder="Father's Occupation" >
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Parent Phone Number </label>
                                                    <input type="text" class="form-control" value="" placeholder="Parent's Phone Number" >
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label>Parent Marital Status</label>
                                                <select class="form-control">
                                                    <option>Married</option>
                                                    <option>Single</option>
                                                    <option>Separated</option>
                                                    <option value="">Divorced</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <h5 class="mb-1 mt-2 mt-sm-0">Parents</h5>
                                            <div class="form-group">
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label>Mother's Name</label>
                                                        <input type="text" class="form-control" value="" placeholder="Mothers Name" >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Parent Email</label>
                                                    <input type="email" class="form-control" required placeholder="Parent Email" >
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Parent Address</label>
                                                    <textarea name="" id="" rows="5" value="" class="form-control"></textarea>                                            </div>
                                                </div>
                                            </div>
                                        <div class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1">
                                            <button type="submit" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1">Save
                                                Changes</button>
                                            <button type="reset" class="btn btn-outline-warning">Reset</button>
                                        </div>
                                    </div>
                                </form>
                                <!-- users edit Info form ends -->
                            </div>
                            <div class="tab-pane" id="social" aria-labelledby="social-tab" role="tabpanel">
                                <!-- users edit socail form start -->
                                <form novalidate>
                                    <div class="row">
                                        <div class="col-12 col-sm-6">

                                            <fieldset>
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label> Ministry</label>
                                                        <select class="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option value="">4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label>Deparment / Units</label>
                                                        <select class="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option value="">4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label> Current Extention</label>
                                                        <select class="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option value="">4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label> Assign Role </label>
                                                    <select id="" name="assignRole" class="custom-select form-control">
                                                        <option value="">Select</option>
                                                        <option value="SMR">SMR</option>
                                                        <option value="Pastor">Pastor</option>
                                                        <option value="Minister">Minister</option>
                                                        <option value="HOD">HOD</option>
                                                        <option value="AHOD">AHOD</option>
                                                        <option value="Member">Member</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label> Requirement</label>
                                                    <select  name="" class="custom-select form-control">
                                                        <option value="">Select</option>
                                                        <option value="">Born Again</option>
                                                        <option value="">Spirit Filled</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1">
                                            <button type="submit" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1">Save
                                                Changes</button>
                                            <button type="reset" class="btn btn-outline-warning">Reset</button>
                                        </div>
                                    </div>
                                </form>
                                <!-- users edit socail form ends -->
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
    },
    data (){
        return {
            compoName : 'Add Member',
            loader : false,
            states: Array,
            form: {
                title: '',
                first_name: '',
                last_name: '',
                other_names: '',
                phone_number: '',
                email_address: '',
                dob: '',
                marital_status: '',
                address: '',
                country: '',
                state: '',
                city: '',
                zipcode: '',
                image: '',
            }

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
                this.form.image = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        submit(){
                this.loader = true;
                axios.post("/member/add/personal", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    this.$inertia.visit('/member/update/'+response.data.member);
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');
                });
        },
        getStates(){
            if(this.form.country != 'United States'){
                axios.get("/getStates/"  +  this.form.country)
                .then(response => {
                    this.states = response.data.states;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });
            }
            else{
                this.states = ['Texas'];
            }
        },

    },

}
</script>


