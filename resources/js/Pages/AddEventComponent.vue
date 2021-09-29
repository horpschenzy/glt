<template>
<div>
  <layout>
      <div class="pull-right">
            <inertiaLink href="/event" class="btn btn-primary" v-if="is('super-admin')">
                <i class="feather icon-home"></i> VIEW EVENTS
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
        <div class="row" id="slide-in">

            <div class="col-xl-5 col-md-5 col-sm-12">
                    <div class="card">
                        <div class="card-content" style="margin-bottom: -10px; margin-top: -10px;">
                            <div class="card-body">
                                <fieldset class="form-group">
                                    <label class="font-medium-3 text-bold-600" for="eventName">Event Name</label>
                                    <input type="text" required v-model="form.event_name" class="form-control" id="eventName">
                                </fieldset>
                                <div class="row" v-if="form.id != ''">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="attendees" class="font-small-3 text-bold-600">Maximum Number Of Attendees</label>
                                            <input type="number" id="attendees" required v-model="form.event_attendee" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12" v-if="form.id != ''">
                                        <div class="form-group">
                                            <label for="timeStart" class="font-small-3 text-bold-600">Event Status</label>
                                            <select class="form-control" v-model="form.status" required>
                                                <option value="NOT STARTED">Not Started</option>
                                                <option value="ONGOING">On Going</option>
                                                <option value="FINISHED">Finished</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-else>
                                    <div class="col-md-12 col-12">
                                        <div class="form-group">
                                            <label for="attendees" class="font-small-3 text-bold-600">Maximum Number Of Attendees</label>
                                            <input type="number" id="attendees" required v-model="form.event_attendee" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="margin-top: -15px">
                        <div class="card-header">
                            <h4 class="font-medium-3 text-bold-600">Date and Time</h4>
                            <div class="pull-right">
                                <fieldset class="form-group">
                                    <select class="form-control" v-model="form.event_type" required id="basicSelect">
                                        <option value="SINGLE">Single Event</option>
                                        <option  value="RECURRING">Recurring Event</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                        <div class="card-content" style="margin-bottom: -30px;">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="startDate" class="font-small-3 text-bold-600">Event Starts</label>
                                            <input type="date" id="startDate" required v-model="form.event_start_date" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="timeStart" class="font-small-3 text-bold-600">Time Starts</label>
                                            <input type="time" id="timeStart" required v-model="form.event_start_time" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="endDate" class="font-small-3 text-bold-600">Event Ends</label>
                                            <input type="date" id="endDate" required v-model="form.event_end_date" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="endTime" class="font-small-3 text-bold-600">Time Ends</label>
                                            <input type="time" id="endTime" required v-model="form.event_end_time" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="margin-top: -15px">
                        <div class="card-header">
                            <h4 class="font-medium-3 text-bold-600">Venue</h4>
                        </div>
                        <div class="card-content" style="margin-bottom: -30px;">
                            <div class="card-body">
                                <ul class="nav nav-pills nav-active-bordered-pill">
                                    <li class="nav-item">
                                        <a class="nav-link" v-bind:class="[form.venue_type == 'Online' ? 'active' : '']" id="base-pill31" data-toggle="pill" @click="changeVenue('Online')" href="#pill31" aria-expanded="true">Online</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="base-pill32" v-bind:class="[form.venue_type == 'Venue' ? 'active' : '']" data-toggle="pill" @click="changeVenue('Venue')" href="#pill32" aria-expanded="false">Venue</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="base-pill33" v-bind:class="[form.venue_type == 'To be Announced' ? 'active' : '']" data-toggle="pill" @click="changeVenue('To be Announced')" href="#pill33" aria-expanded="false">To be Announced</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane" v-bind:class="[form.venue_type == 'Online' ? 'active' : '']" id="pill31" aria-expanded="true" aria-labelledby="base-pill31">
                                    </div>
                                    <div class="tab-pane" id="pill32" v-bind:class="[form.venue_type == 'Venue' ? 'active' : '']" aria-labelledby="base-pill32">
                                        <fieldset class="form-group">
                                            <input type="text" class="form-control" v-model="form.location" placeholder="Input Location">
                                        </fieldset>
                                    </div>
                                    <div class="tab-pane" id="pill33" v-bind:class="[form.venue_type == 'To be Announced' ? 'active' : '']" aria-labelledby="base-pill33">
                                        <fieldset class="form-group">
                                            <input type="text" class="form-control" v-model="form.location" placeholder="Input Location">
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div class="col-xl-5 col-md-5 col-sm-12">
                <div class="card">
                    <div class="card-content" style="margin-bottom: -10px; margin-top: -10px;">
                        <div class="card-body">
                            <fieldset class="form-group">
                                <label for="basicInputFile" class="font-medium-3 text-bold-600">Event Image (200px X 200px)</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                        accept="image/*"
                                        data-default-file=""
                                        data-height="200"
                                        data-max-file-size="5M"
                                        data-width="100"
                                        data-allowed-file-extensions="jpg jpeg gif png rpg jfif"
                                        @change="onImageChange"/>
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                            <button type="button" @click="addEvent('PUBLISHED')" class="btn btn-success btn-md btn-block">Publish</button>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <!-- Block level buttons with icon -->
                        <div class="form-group">
                            <button type="button" @click="addEvent('DRAFT')" class="btn btn-outline-primary btn-icon btn-md btn-block">Save As Draft</button>
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
            event: Object
        },
        data (){
            return {
                compoName : 'Create an Event',
                loader : false,
                addEdit : '',
                form: {
                    event_name: '',
                    event_attendee: 0,
                    status: 'NOT STARTED',
                    event_type: 'SINGLE',
                    event_start_date: '',
                    event_start_time: '',
                    event_end_date: '',
                    event_end_time: '',
                    venue_type: 'Online',
                    location: '',
                    event_image: '',
                    event_status: '',
                    id: ''
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
                    this.form.event_image = e.target.result;
                };

                reader.readAsDataURL(file);
            },

            addEvent(val) {
                this.loader = true;
                this.form.event_status = val;
                axios.post("/event", this.form)
                .then(response => {
                toastr.success(response.data.success, 'Success');
                    this.$inertia.visit('/event');
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });

            },

            changeVenue(val){
                this.form.venue_type = val;
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
        created() {
            if (this.event != undefined) {
                this.form = this.event;
            }
        },
    }
</script>


