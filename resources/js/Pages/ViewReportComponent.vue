<template>
    <div>
        <layout>
            <div class="pull-right">
                <button data-toggle="modal"  data-target="#generateReportModal" class="btn btn-primary">
                    Generate Report
                </button>
            </div>
            <title-bar :name="compoName"></title-bar>
            <div class="row" id="slide-in">
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body card-dashboard mb-2">
                                <div class="pull-right">
                                    <inertiaLink class="btn btn-primary" href="/report">
                                        <i class="feather icon-home"></i> Reports
                                    </inertiaLink>
                                </div>
                                <h4 class="card-title"> HOM Care Report </h4>
                                <div class="table-responsive mt-2">
                                    <table class="table table-hover zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(report, key) in carereports" v-bind:key="report.id">
                                                <td>{{ key + 1 }} </td>
                                                <td>{{ report.month }}</td>
                                                <td>{{ report.ministry.min_name }}</td>
                                                <td>
                                                    <button class="btn btn-info btn-rounded btn-sm" @click="deleteHomReport(report.id);"><i class="feather icon-delete"></i></button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body card-dashboard mb-2">
                                <h4 class="card-title"> AHOM Care Report </h4>
                                <div class="table-responsive mt-2">
                                    <table class="table table-hover zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th> Date</th>
                                            <th>Description</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(report, key) in ahomcarereports" v-bind:key="report.id">
                                                <td>{{ key + 1 }} </td>
                                                <td>{{ report.month }}</td>
                                                <td>{{ report.ministry.min_name }}</td>
                                                <td>
                                                    <button class="btn btn-info btn-rounded btn-sm" @click="deleteAhomReport(report.id);"><i class="feather icon-delete"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body card-dashboard mb-2">
                                <h4 class="card-title"> Service Report</h4>
                                <div class="table-responsive mt-2">
                                    <table class="table table-hover zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Service Date</th>
                                            <th>Service Type</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(report, key) in reports" v-bind:key="report.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ report.service_date }}</td>
                                            <td>{{ report.service_type }}</td>
                                            <td>
                                                <a class="btn btn-success btn-rounded btn-sm" :href="'/service/report/'+report.id" target="_blank">view</a>
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteReport(report.id);"><i class="feather icon-delete"></i></button>
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

            <div class="modal fade text-left" id="generateReportModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel33">Generate Report </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="form form-vertical" method="POST" action="#" @submit.prevent="generateReport">
                            <div class="modal-body row m-1">
                                <div class="row">
                                    <div class="form-group col-6">
                                        <label for="first-name-icon">Service Date</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="date" v-model="service_date" required=""  class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group col-6">
                                        <label for="first-name-icon">Service Type</label>
                                        <select class="custom-select form-control" id="servicetype" v-model="service_type" required>
                                            <option value="">Select Service Type</option>
                                            <option value="Sunday Service">Sunday Service</option>
                                            <option value="Special Miracle Service">SMS</option>
                                            <option value="Bible study">Bible Study</option>
                                            <option value="Vigil">Vigil</option>
                                            <option value="SOTM Event">SOTM Event</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Generate</button>
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
        reports: Array,
        carereports: Array,
        ahomcarereports: Array,
    },
    data (){
        return {
            compoName : 'View Report',
            loader : false,
            addEdit : '',
            service_date : '',
            service_type : '',
            form: {
                unit_name: '',
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
        deleteHomReport(id) {
            this.$swal({
                title: 'Delete This Hom care Report?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Delete it!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    axios.get("/homreport/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('/view/report');

                        }).catch(error => {
                        toastr.error(error.response.data.message, 'Error');
                    });
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        deleteAhomReport(id) {
            this.$swal({
                title: 'Delete This AHOM Care Report?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Delete it!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    axios.get("/ahomreport/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('/view/report');

                        }).catch(error => {
                        toastr.error(error.response.data.message, 'Error');
                    });
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        deleteReport(id) {
            this.$swal({
                title: 'Delete This Service Report?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Delete it!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    axios.get("/report/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('/view/report');

                        }).catch(error => {
                        toastr.error(error.response.data.message, 'Error');
                    });
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        submit() {
            this.loader = true;
            axios.post("/unit/add", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    $('#addUnitModal').modal('hide');
                    this.$inertia.visit('unit');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },
        generateReport(){
            $('#generateReportModal').modal('hide');
            this.$inertia.visit('/generate/service/report/'+this.service_date+'/'+this.service_type);
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


