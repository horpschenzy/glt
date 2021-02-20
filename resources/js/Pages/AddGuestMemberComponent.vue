<template>
  <layout id="slide-in">
    <title-bar :name="compoName"></title-bar>
    <section id="multiple-column-form">
            <div class="row match-height">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Add Guest</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <form @submit.prevent="submitGuest" class="form">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <input v-model="form.first_name" type="text" class="form-control" placeholder="First Name" value="" required data-validation-required-message="This username field is required">
                                                    <label for="first-name-column">First Name</label>
                                                </div>
                                            </div>


                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <input v-model="form.last_name" type="text" class="form-control" placeholder="Last Name" value="" required data-validation-required-message="This email field is required">
                                                    <label for="last-name-column">Last Name</label>
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <label>Other Names</label>
                                                    <input v-model="form.other_names" type="text" class="form-control" placeholder="Other Name" value="" data-validation-required-message="This name field is required">
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <input v-model="form.email_address" type="email" class="form-control" placeholder="Email"  required data-validation-required-message="This email field is required">
                                                    <label for="country-floating">email</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                 <div class="form-group">
                                                    <label>Phone Number</label>
                                                    <input v-model="form.phone_number" type="text" class="form-control" placeholder="Phone Number" value="" required data-validation-required-message="This email field is required">
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                        <label>Birthday </label>
                                                        <input v-model="form.birthday" type="text" class="form-control" placeholder="DD/MM" value="" required >
                                                </div>
                                            </div>


                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <select class="form-control" required v-model="form.age_range">
                                                        <option value="">Select Age range </option>
                                                        <option value="15-20">15 - 20</option>
                                                        <option value="21-25">21-25</option>
                                                        <option value="26-30">26-30</option>
                                                        <option value="31-35">31-35</option>
                                                        <option value="36-40">36-40</option>
                                                        <option value="41-45">41-45</option>
                                                        <option value="46-50">46-50</option>
                                                        <option value="51-upward">51-Upward</option>

                                                    </select>
                                                    <label for="company-column">Age range</label>
                                                </div>
                                            </div>


                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <select class="form-control" required v-model="form.marital_status">
                                                        <option value="">Select Marital Status </option>
                                                        <option value="Married">Married</option>
                                                        <option value="Single">Single</option>
                                                        <option value="Separated">Separated</option>
                                                        <option value="Divorced">Divorced</option>
                                                    </select>
                                                    <label for="company-column">Marital Status</label>
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <select class="form-control" required v-model="form.gender">
                                                        <option value="" >Select Gender </option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <input type="text" id="email-id-column" class="form-control" v-model="form.professional_occupation"  placeholder="Occupation">
                                                    <label for="email-id-column">Occupation</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <input type="text"  class="form-control" v-model="form.school" placeholder="School">
                                                    <label for="email-id-column">School</label>
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <input type="text"  class="form-control" v-model="form.employer"  placeholder="Office">
                                                    <label for="email-id-column">Office</label>
                                                </div>
                                            </div>



                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label for="">Are You Baptized In Water?</label>
                                                    <select  class="form-control" required v-model="form.baptized">
                                                        <option value="">Select </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label for="">Date of Baptism</label>
                                                    <input type="date"  class="form-control" id="yes" v-model="form.date_of_baptism">
                                                </div>

                                            </div>


                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <input  type="text" placeholder="How was Service ?" v-model="form.service_status" value="" class="form-control">
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label for="">How did you know about our church?</label>
                                                    <select class="form-control" required v-model="form.find_church">
                                                        <option value="">Select Status</option>
                                                        <option value="social media">Social Media</option>
                                                        <option value="friends-family">Friends/Family</option>
                                                        <option value="billboard">Billboard</option>
                                                        <option value="flyers">Flyers</option>
                                                        <option value="others">others</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label for="">When will you like to be visited</label>
                                                    <input type="text" v-model="form.visit_guest" class="form-control">
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label for="address">Wil you like to join church</label>
                                                    <select class="form-control" required  v-model="form.join_church">
                                                        <option value="">Select Status</option>
                                                        <option value="yes">Yes </option>
                                                        <option value="no">No</option>
                                                        <option value="undecided">Undecided</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label> Are You born again? </label>
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
                                                        </ul>
                                                    </div>
                                                </div>


                                            </div>

                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <div class="controls">
                                                        <label> DO you speak in tongue? </label>
                                                        <ul class="list-unstyled mb-0">
                                                            <li class="d-inline-block mr-2">
                                                                <fieldset>
                                                                    <div class="vs-checkbox-con vs-checkbox-primary">
                                                                        <input type="checkbox" id="speak_in_tongue" v-model="form.speak_in_tongue" value="Born Again">
                                                                        <span class="vs-checkbox">
                                                                        <span class="vs-checkbox--check">
                                                                            <i class="vs-icon feather icon-check"></i>
                                                                        </span>
                                                                    </span>
                                                                        <span class="">Speak in Again</span>
                                                                    </div>
                                                                </fieldset>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-label-group">
                                                    <textarea v-model="form.address" id="Address" rows="5" value="" class="form-control"></textarea>
                                                    <label for="address">Address</label>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Submit</button>
                                                <button type="reset" class="btn btn-outline-warning mr-1 mb-1 waves-effect waves-light">Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
            compoName : 'Add Guest',
            loader : false,
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
                professional_occupation:'',
                school:'',
                employer:'',
                requirement:'',
                speak_in_tongue:'',
                baptized:'',
                date_of_baptism:'',
                service_status:'',
                visit_guest:'',
                find_church:'',
                gender:'',
                birthday:'',
                age_range:'',
                join_church:'',
            }

        }
    },
    methods: {
        submitGuest(){
            this.loader = true;
            axios.post("/member/add/guest", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    this.$inertia.visit('/members');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');
            });
        },
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        })
    },

}
</script>

