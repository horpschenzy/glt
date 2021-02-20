<template>
  <layout id="slide-in">
    <title-bar :name="compoName"></title-bar>
    <div class="row" id="slide-in">
        <div class="col-xl-12 col-md-12 col-sm-12">
            <div class="">
                <div class="card-content collapse show">
                    <div class="card-body">
                        <div class="users-list-filter">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-lg-3">
                                        <fieldset class="form-group position-relative">
                                            <input type="text" class="form-control" id="iconLabelRight" placeholder="Search Event">
                                            <div class="form-control-position">
                                                <i class="feather icon-search"></i>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-12 col-sm-6 col-lg-3">
                                        <fieldset class="form-group">
                                            <select class="form-control" id="users-list-status">
                                                <option value="">Event Status</option>
                                                <option value="">All</option>
                                                <option value="NOT STARTED">NOT STARTED</option>
                                                <option value="ONGOING">ONGOING</option>
                                                <option value="FINISHED">FINISHED</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div class="col-12 col-sm-6 col-lg-3">
                                        <fieldset class="form-group">
                                            <select class="form-control" id="users-list-verified">
                                                <option value="">Organiser</option>
                                                <option value="0">All</option>
                                                <option value="true">GLT GLOBAL</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div class="col-12 col-sm-6 col-lg-1">
                                        <label for="users-list-department">Import Excel</label>
                                    </div>
                                    <div class="col-12 col-sm-6 col-lg-2">
                                        <inertiaLink href="/add/event" class="btn btn-md btn-success" v-if="is('super-admin')">
                                            <i class="feather icon-plus"></i> Add Event
                                        </inertiaLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12 col-md-12 col-sm-12">
            <section id="data-thumb-view" class="data-thumb-view-header">
                    <div class="table-responsive">
                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                            <table class="table data-list-view dataTable no-footer" id="DataTables_Table_0" role="grid">
                            <thead>
                                <th>Event</th>
                                <th></th>
                                <th></th>
                                <th>Attendees</th>
                                <th></th>
                                <th>Status</th>
                                <th></th>
                            </thead>
                            <tbody >
                                <template v-if="events.length > 0">
                                    <tr role="row" class="odd" v-for="event in events" :key="event.id">
                                        <td class="product-category" width="12%">{{ event.created_at  }}</td>
                                        <td class="product-category" width="10%">
                                            <img :src="event.event_image" width="70px" height="70px" :alt="event.event_name">
                                        </td>
                                        <td class="product-name" width="40%">
                                            <h5><a :href="'/e/'+event.event_code">{{ event.event_name }}</a></h5></p>
                                            <p>God&#039;s Love Tabernacle International Church, {{ (event.extension && (event.extension.ext_name != 'null' || event.extension != '') ? event.extension.ext_name : 'ALL' ) }}</p>
                                            {{ event.event_start_date }} at {{  event.event_start_time }}
                                        </td>
                                        <td class="product-price" width="5%">
                                            <h4>{{ event.checkins.length +'/'+event.event_attendee }}</h4>
                                        </td>
                                        <td class="product-name" width="17%">
                                            <div class="progress progress-bar-warning" v-html="displayProgress(event.checkins.length, event.event_attendee)">

                                            </div>
                                        </td>
                                        <td width="17%">
                                            <h5>
                                                <span class="bullet bullet-primary bullet-sm" v-if="event.status == 'NOT STARTED'"></span>
                                                <span class="bullet bullet-primary bullet-sm" v-if="event.status == 'ONGOING'"></span>
                                                <span class="bullet bullet-primary bullet-sm" v-if="event.status == 'FINISHED'"></span>
                                                {{ event.status }}
                                            </h5>
                                        </td>
                                        <td class="product-price">
                                            <div class="dropdown">
                                                <!-- <button class="btn-icon btn btn-primary btn-round btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                                                    <i class="feather icon-more-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <inertia-link  :href="'/edit/event/' + event.event_code" class="dropdown-item">Edit</inertia-link>
                                                        <a   @click="deleteEvent(event.id);" class="dropdown-item">Delete</a>
                                                        <inertia-link  :href="'/attendee/event/' + event.event_code" class="dropdown-item">Attendees</inertia-link>
                                                        <inertia-link  :href="'/check-in/event/' + event.event_code" class="dropdown-item">Check-In</inertia-link>
                                                        <input :id="'input'+event.id" hidden :value="event.event_url" type="text"/>
                                                        <a  @click="copy(event.event_url, event.id)" class="dropdown-item">Copy Url</a>
                                                    </div>
                                                <!-- </button> -->
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>No Events</tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </div>
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
        events: Array,
    },
    data (){
        return {
            compoName : 'Event List',
            loader : false,
             form: {
            }

        }
    },
    methods: {
        displayProgress(attendee, total){
            let totalAttendee = parseInt(total)

                var width = 0;
                if (totalAttendee < 1) {
                    width = 0;
                }
                else{
                    width = ((parseInt(attendee) / totalAttendee) * 100).toFixed();
                }
                var html = "<div class='progress-bar' role='progressbar' aria-valuenow='40' aria-valuemin='40' aria-valuemax='100' style='width:"+ width+"%'></div>";
                return html;
        },

        copy(url, id){
            var newText = document.getElementById("input"+id).hidden = false;
            var copyText = document.getElementById("input"+id);
            copyText.select()
            document.execCommand("copy");
            toastr.success('Event Url Copied!', 'Success');
            this.$inertia.visit('event');
        },

        deleteEvent(id) {
                this.$swal({
                    title: 'Delete Event?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/delete/event/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('event');

                        }).catch(error => {
                            toastr.error(error.response.data.error, 'Error');
                        });
                    } else {
                        this.$swal('Cancelled', 'Your file is still intact', 'info')
                    }
                })
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

