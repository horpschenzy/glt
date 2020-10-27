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
                                <a class="nav-link d-flex align-items-center" :class="[(member.progress == 4) ? 'active' : '']" id="account-tab" data-toggle="tab" href="#account" aria-controls="account" role="tab" aria-selected="true">
                                    <i class="feather icon-user mr-25"></i><span class="d-none d-sm-block">Personal Information</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center" :class="[(member.progress == 1) ? 'active' : '']" id="careeer-tab" data-toggle="tab" href="#career" aria-controls="career" role="tab" aria-selected="false">
                                    <i class="feather icon-info mr-25"></i><span class="d-none d-sm-block">Career/Discipline</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center" :class="[(member.progress == 2) ? 'active' : '']" id="information-tab" data-toggle="tab" href="#information" aria-controls="information" role="tab" aria-selected="false">
                                    <i class="feather icon-info mr-25"></i><span class="d-none d-sm-block">Parent Information</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center" :class="[(member.progress == 3) ? 'active' : '']" id="social-tab" data-toggle="tab" href="#social" aria-controls="social" role="tab" aria-selected="false">
                                    <i class="feather icon-share-2 mr-25"></i><span class="d-none d-sm-block">Unit/Ministry/Department/Role</span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane" id="account" :class="[(member.progress == 4) ? 'active' : '']" aria-labelledby="account-tab" role="tabpanel">
                                <form @submit.prevent="updatePersonal">
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
                                        <button type="submit" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Save
                                            and Continue</button>
                                        <button type="reset" class="btn btn-outline-warning">Reset</button>
                                    </div>
                                </form>
                                <!-- users edit account form ends -->
                            </div>
                            <div class="tab-pane " id="career" :class="[(member.progress == 1) ? 'active' : '']" aria-labelledby="career-tab" role="tabpanel">
                                <form @submit.prevent="updateCareer">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="card overflow-hidden">
                                                <div class="card-content">
                                                    <ul class="list-unstyled mb-0 container">
                                                        <li class="d-inline-block mr-2">
                                                            <fieldset>
                                                                <div class="vs-radio-con">
                                                                    <input type="radio" v-model="form.career" required checked value="student">
                                                                    <span class="vs-radio">
                                                                        <span class="vs-radio--border"></span>
                                                                        <span class="vs-radio--circle"></span>
                                                                    </span>
                                                                    <span class="">Student</span>
                                                                </div>
                                                            </fieldset>
                                                        </li>
                                                        <li class="d-inline-block mr-2">
                                                            <fieldset>
                                                                <div class="vs-radio-con vs-radio-success">
                                                                    <input type="radio" v-model="form.career" required value="professional">
                                                                    <span class="vs-radio">
                                                                        <span class="vs-radio--border"></span>
                                                                        <span class="vs-radio--circle"></span>
                                                                    </span>
                                                                    <span class="">Professional</span>
                                                                </div>
                                                            </fieldset>
                                                        </li>
                                                        <li class="d-inline-block mr-2">
                                                            <fieldset>
                                                                <div class="vs-radio-con vs-radio-danger">
                                                                    <input type="radio" v-model="form.career" required value="nysc" disabled>
                                                                    <span class="vs-radio">
                                                                        <span class="vs-radio--border"></span>
                                                                        <span class="vs-radio--circle"></span>
                                                                    </span>
                                                                    <span class="">NYSC</span>
                                                                </div>
                                                            </fieldset>
                                                        </li>
                                                        <li class="d-inline-block mr-2">
                                                            <fieldset>
                                                                <div class="vs-radio-con vs-radio-info">
                                                                    <input type="radio" v-model="form.career" required value="enterprenuer">
                                                                    <span class="vs-radio">
                                                                        <span class="vs-radio--border"></span>
                                                                        <span class="vs-radio--circle"></span>
                                                                    </span>
                                                                    <span class="">Enterprenuer</span>
                                                                </div>
                                                            </fieldset>
                                                        </li>
                                                    </ul>
                                                    <div class="card-body">
                                                        <div class="tab-content">
                                                            <div id="home" aria-labelledby="home-tab" role="tabpanel" class="tab-pane" :class="[(form.career == 'student') ? 'active' : '']">
                                                                <div class="form-row">
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="nameofSchool">Name of School</label>
                                                                        <input type="text" id="School" placeholder="School Name" v-model="form.school" value="" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="courseofStudy">Course of Study</label> 
                                                                        <input type="text" id="courseofStudy" placeholder="Course of Study" v-model="form.course_of_study" value="" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="hostelAddress">Hostel Address</label> 
                                                                        <input type="text" id="hostelAddress" placeholder="Hostel Address" v-model="form.hostel_address" value="" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="homeAddress">Home Address</label> 
                                                                        <input type="text" id="homeAddress" placeholder="Residential Address" v-model="form.home_address" value="" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="form-row">
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="level">Cuurrent Level</label>
                                                                        <select id="level" v-model="form.school_level" class="custom-select form-control">
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
                                                                        <select id="Category" v-model="form.education_category" class="custom-select form-control">
                                                                            <option value="">Select</option>
                                                                            <option value="Undergraduate">Undergraduate</option>
                                                                            <option value="Diploma">Diploma</option>
                                                                            <option value="Post graduate">Post Graduate Diploma</option>
                                                                            <option value="Masters">Masters</option>
                                                                            <option value="Doctorate">Doctorate</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <div class="form-group"><label for="foundationstart">Foundation School Startdate</label> 
                                                                        <input type="date" v-model="form.foundation_school_start_date" class="form-control pickadate-months-year"></div>
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <div class="form-group"><label for="firstName1">Foundation School Enddate</label> 
                                                                        <input type="date"  v-model="form.foundation_school_end_date" class="form-control pickadate-months-year"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="profile" aria-labelledby="profile-tab" role="tabpanel" class="tab-pane" :class="[(form.career == 'professional') ? 'active' : '']">
                                                                <div class="form-row">
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip03">Occupation</label> 
                                                                        <input type="text" id="Occupation2" placeholder="Occupation" v-model="form.professional_occupation" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip03">Employer</label> 
                                                                        <input type="text" id="Employer" placeholder="Employer" v-model="form.employer" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip04">Office Address</label> 
                                                                        <input type="text" placeholder="Address" v-model="form.office_address" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip05">Position</label> 
                                                                        <input type="text" id="Position" placeholder="Position" v-model="form.position" class="form-control">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="about" aria-labelledby="about-tab" role="tabpanel" class="tab-pane" :class="[(form.career == 'enterprenuer') ? 'active' : '']">
                                                                <div class="form-row">
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip03">Name of Business/Service</label> 
                                                                        <input type="text" id="Businessname" placeholder="Name of Business/Service" v-model="form.business_name" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip03">Nature of Business</label> 
                                                                        <input type="text" id="natureofbusiness" placeholder="Nature of BusinessCourse of Study" v-model="form.business_nature" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip04">Business Address</label> 
                                                                        <input type="text" id="businessAddress" placeholder="Business Address" v-model="form.business_address" class="form-control">
                                                                    </div>
                                                                    <div class="col-md-3 mb-3">
                                                                        <label for="validationTooltip05">Position</label> 
                                                                        <input type="text" id="Position1" placeholder="Position" v-model="form.business_position" class="form-control">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            
                                        </div>
                                        <div class="col-md-12 col-12">
                                            <button type="submit" class=" float-right btn btn-primary mr-1 mb-1 waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Save and Continue</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane" id="information" :class="[(member.progress == 2) ? 'active' : '']" aria-labelledby="information-tab" role="tabpanel">
                                <!-- users edit Info form start -->
                                <form @submit.prevent="updateParent">
                                    <div class="row mt-1">
                                        <div class="col-12 col-sm-6">
                                            <h5 class="mb-1"><i class="feather icon-user mr-25"></i>Parent Information</h5>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <div class="controls">
                                                            <label>Father's Name</label>
                                                            <input type="text" v-model="form.father_name" class="form-control" placeholder="Father's Name" >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Fathers Occupation</label>
                                                    <input type="text" v-model="form.father_occupation" class="form-control" value="" placeholder="Father's Occupation" >
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Parent Phone Number </label>
                                                    <input type="text" v-model="form.parent_phone_number" class="form-control" value="" placeholder="Parent's Phone Number" >
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label>Parent Marital Status</label>
                                                <select class="form-control" v-model="form.parent_marital_status">
                                                    <option value="">Select Status</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Separated">Separated</option>
                                                    <option value="Divorced">Divorced</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <h5 class="mb-1 mt-2 mt-sm-0">Parents</h5>
                                            <div class="form-group">
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label>Mother's Name</label>
                                                        <input type="text" v-model="form.mother_name" class="form-control" value="" placeholder="Mothers Name" >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Parent Email</label>
                                                    <input type="email" v-model="form.parent_email" class="form-control" placeholder="Parent Email" >
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="controls">
                                                    <label>Parent Address</label>
                                                    <textarea v-model="form.parent_address" id="" rows="5" class="form-control"></textarea> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1">
                                            <button type="submit" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Save and Continue</button>
                                            <button type="reset" class="btn btn-outline-warning">Reset</button>
                                        </div>
                                    </div>
                                </form>
                                <!-- users edit Info form ends -->
                            </div>
                            <div class="tab-pane" id="social" :class="[(member.progress == 3) ? 'active' : '']" aria-labelledby="social-tab" role="tabpanel">
                                <!-- users edit socail form start -->
                                <form @submit.prevent="updateUnit">
                                    <div class="row">
                                        <div class="col-12 col-sm-6">

                                            <fieldset>
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label> Ministry</label>
                                                        <select class="form-control" v-model="form.ministry_id">
                                                            <option value="">Select Ministry</option>
                                                            <option v-for="(ministry, key) in ministries" :key="key" :value="ministry.id">{{ ministry.min_name }}</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label>Deparment / Units</label>
                                                        <select class="form-control" v-model="form.unit_id">
                                                            <option value="">Select Unit</option>
                                                            <option v-for="(unit, key) in units" :key="key" :value="unit.id">{{ unit.unit_name }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label>Member Status</label>
                                                        <select class="form-control" v-model="form.status">
                                                            <option value="">Select Status</option>
                                                            <option value="Guest">Guest</option>
                                                            <option value="Foundation School">Foundation School</option>
                                                            <option value="Steward">Steward</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label> Current Extention</label>
                                                    <select class="form-control" v-model="form.extension_id">
                                                        <option value="">Select Extension</option>
                                                        <option v-for="(extension, key) in extensions" :key="key" :value="extension.id">{{ extension.ext_name }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="controls">
                                                    <label> Requirement</label>
                                                    <!-- <select v-model="form.requirement" class="custom-select form-control">
                                                        <option value="">Select</option>
                                                        <option value="born_again">Born Again</option>
                                                        <option value="spirit_filled">Spirit Filled</option>
                                                    </select> -->
                                                    <ul class="list-unstyled mb-0">
                                                        <li class="d-inline-block mr-2">
                                                            <fieldset>
                                                                <div class="vs-checkbox-con vs-checkbox-primary">
                                                                    <input type="checkbox" id="born_again" v-model="form.requirement" value="Born Again">
                                                                    <span class="vs-checkbox">
                                                                        <span class="vs-checkbox--check">
                                                                            <i class="vs-icon feather icon-check"></i>
                                                                        </span>
                                                                    </span>
                                                                    <span class="">Born Again</span>
                                                                </div>
                                                            </fieldset>
                                                        </li>
                                                        <li class="d-inline-block mr-2">
                                                            <fieldset>
                                                                <div class="vs-checkbox-con vs-checkbox-success">
                                                                    <input type="checkbox" v-model="form.requirement" id="spirit_filled" value="Spirit Filled">
                                                                    <span class="vs-checkbox">
                                                                        <span class="vs-checkbox--check">
                                                                            <i class="vs-icon feather icon-check"></i>
                                                                        </span>
                                                                    </span>
                                                                    <span class="">Spirit Filled</span>
                                                                </div>
                                                            </fieldset>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="controls">
                                                    <label> Assign Role</label>
                                                    <select class="form-control" v-model="form.role_id">
                                                        <option value="">Select Role</option>
                                                        <option v-for="(role, key) in roles" :key="key" :value="role.id">{{ formatString(role.name) }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1">
                                            <button type="submit" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Save </button>
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
        member: Object,
        ministries: Array,
        units: Array,
        extensions: Array,
        roles: Array,
    },
    data (){
        return {
            compoName : 'Update Member',
            loader : false,
            states: Array,
            form: {
                id: '', title: '', first_name: '', last_name: '', other_names: '',
                phone_number: '', email_address: '', dob: '', marital_status: '',
                address: '', country: '', state: '', city: '',
                zipcode: '', image: '', career: '', school: '',
                course_of_study: '', hostel_address: '', home_address: '', school_level: '',
                education_category: '', foundation_school_end_date: '', foundation_school_start_date: '', professional_occupation: '',
                employer: '', office_address: '', position: '', business_name: '', business_nature: '',
                business_address: '', business_position: '', father_name: '', mother_name: '',
                father_occupation: '', parent_email: '', parent_phone_number: '', parent_address: '',
                parent_marital_status: '', ministry_id: '', extension_id: '', unit_id: '',
                requirement: [], role_id: '', status: ''
            }

        }
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        });
        this.getStates();
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
        updateUnit(){
            this.loader = true;
            axios.post("/member/unit/update", this.form)
            .then(response => {
                toastr.success(response.data.success, 'Success');
                this.$inertia.visit('/member/update/'+ this.form.id);
                this.loader = false;
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');
            });
        },
        updateParent(){
            this.loader = true;
            axios.post("/member/parent/update", this.form)
            .then(response => {
                toastr.success(response.data.success, 'Success');
                this.$inertia.visit('/member/update/'+ this.form.id);
                this.loader = false;
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');
            });
        },
        updateCareer(){
            this.loader = true;
            axios.post("/member/career/update", this.form)
            .then(response => {
                toastr.success(response.data.success, 'Success');
                this.$inertia.visit('/member/update/'+ this.form.id);
                this.loader = false;
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');
            });
        },
        updatePersonal(){
            this.loader = true;
            axios.post("/member/personal/update", this.form)
            .then(response => {
                toastr.success(response.data.success, 'Success');
                this.$inertia.visit('/member/update/'+ this.form.id);
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

    created() {
        this.form = this.member;
        this.form.requirement = [];
        this.form.image = '';
    },
}
</script>


