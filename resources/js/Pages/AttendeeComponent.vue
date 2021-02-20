<template>
  <layout id="slide-in">
    <div class="pull-right">
        <inertiaLink href="/event" class="btn btn-primary" v-if="is('super-admin')">
            <i class="feather icon-home"></i> Back
        </inertiaLink>
    </div>
    <title-bar :name="compoName"></title-bar>
    <div class="row" id="slide-in">
        <div class="col-xl-12 col-md-12 col-sm-12">
            <div class="">
                <div class="card-content collapse show">
                    <div class="card-header">
                        <h3>{{ event.event_name }}</h3>
                    </div>
                    <div class="card-body">
                        <div class="users-list-filter">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-lg-5">
                                        <fieldset class="form-group position-relative">
                                            <input type="text" class="form-control" id="iconLabelRight" v-model="search" placeholder="Search Attendee">
                                            <div class="form-control-position">
                                                <i class="feather icon-search"></i>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12">
            <section id="data-thumb-view" class="data-thumb-view-header">
                    <div class="table-responsive">
                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                            <table class="table data-list-view dataTable no-footer" id="DataTables_Table_0" role="grid">
                            <thead>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Email Address</th>
                            </thead>
                            <tbody>
                                <template v-if="checkins.length > 0">
                                <tr role="row" v-for="checkin in checkins" :key="checkin.access_code" class="odd">
                                    <td class="product-category">{{checkin.name}}</td>
                                    <td class="product-category">{{checkin.access_code}}</td>
                                    <td class="product-name">{{checkin.email}}</td>
                                </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                          No registered Attendee!
                                    </tr>
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
        checkins: Array,
        event: Array,
    },
    data (){
        return {
            compoName : 'Event Attendees',
            loader : false,
            search : '',
             form: {
                check_in_id:''
            }

        }
    },
    watch: {
        search: {
            handler: _.debounce(function () {
                this.searchCheckIns()
            }, 100)
        }
    },
    methods: {
       searchCheckIns(){
            this.form.search = this.search;
            axios.post("/searchCheckIns/"+this.event.id, this.form)
            .then(response => {
                this.checkins = response.data.success;
            }).catch(error => {
            });
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

