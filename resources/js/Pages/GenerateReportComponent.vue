<template>
    <layout id="slide-in">
        <div class="pull-right">
                <i class="feather icon-printer" @click="print()"></i>
        </div>
        <title-bar :name="compoName"></title-bar>
        <section id="multiple-column-form">
            <div class="row match-height">
                <div class="col-12">
                    <div class="card" id="printArea">
                        <div class="card-header"></div>
                        <div class="card-content">
                            <h4 class="text-center">GOD’S LOVE TABERNACLE INTERNATIONAL CHURCH, ILE-IFE</h4>
                            <h5 class="text-center">REPORT OF SERVICE: {{  service_type.toUpperCase() }}</h5>
                            <div class="card-body">
                                <form class="form">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <p class="font-medium-1"> Date: <strong> {{ (report) ?  report.service_date : '' }} </strong> </p>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Duration of Service: <strong> {{ (report) ?  report.duration : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Name of Service: <strong> {{ (report) ?  report.service_type : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Start Time: <strong> {{ (report) ?  report.start_time : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> End Time: <strong> {{ (report) ?  report.end_time : '' }} </strong> </p>
                                                </div>
                                            </div>
                                        </div>
                                            <h5> <strong>ATTENDANCE:</strong></h5>
                                            <div class="col-md-12 col-12">
                                                <div class="table-responsive">
                                                    <table class="table table-hover ">
                                                        <thead>
                                                        <tr>
                                                            <th>Male</th>
                                                            <th>Female</th>
                                                            <th>Children
                                                            <small style="font-style: italic">male</small>
                                                            </th>
                                                            <th>
                                                                Children
                                                                <small style="font-style: italic">female</small>
                                                            </th>
                                                            <th>
                                                                Teenage
                                                                <small style="font-style: italic">male</small>
                                                            </th>
                                                            <th>
                                                                Teenage
                                                                <small style="font-style: italic">female</small>
                                                            </th>

                                                            <th>
                                                                Total
                                                            </th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>{{ (protocolReport) ? protocolReport.male : 0 }}</td>
                                                            <td>{{ (protocolReport) ? protocolReport.female : 0 }}</td>
                                                            <td>{{ (protocolReport) ? protocolReport.male_child : 0 }}</td>
                                                            <td>{{ (protocolReport) ? protocolReport.female_child : 0 }}</td>
                                                            <td>{{ (protocolReport) ? protocolReport.male_teenage : 0 }}</td>
                                                            <td>{{ (protocolReport) ? protocolReport.female_teenage : 0 }}</td>
                                                            <td>{{ (protocolReport) ? protocolReport.total : 0 }}</td>

                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <br><br>
                                            <h5> <strong>MEDIA MINISTRY DETAILS</strong></h5>

                                            <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Name of Minister: <strong> {{ (mediaReport) ?  mediaReport.minister_name : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Title/Topic: <strong> {{ (mediaReport) ?  mediaReport.topic : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Duration Of Ministeration: <strong> {{ (mediaReport) ?  mediaReport.duration : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <label>Verified By</label>
                                                    <input type="text" class="form-control"  placeholder="Verified By">
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Signature/Date: <strong> {{ (mediaReport) ?  mediaReport.created_at : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            </div>
                                        <br><br>
                                        <h5> <strong>CARE MINISTRY DETAILS</strong></h5>

                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1">No Of Guests: <strong> {{ (careReport) ?  careReport.no_of_guest : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> No Of New Members: <strong> {{ (careReport) ?  careReport.no_of_new_member : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"><small style="font-style: italic">From guest list</small> Born-Again converts: <strong> {{ (careReport) ?  careReport.born_again_converts : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Holy Ghost Baptism: <strong> {{ (careReport) ?  careReport.holy_ghost_baptism : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Verified By</label>
                                                    <input type="text" class="form-control"  placeholder="Verified By">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Signature/Date: <strong> {{ (careReport) ?  careReport.created_at : '' }} </strong> </p>
                                                </div>
                                            </div>
                                        </div>
                                        <br><br>
                                        <h5> <strong>FOLLOW-UP MINISTRY DETAILS</strong></h5>

                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1">No Of Guests: <strong> {{ (followReport) ?  followReport.no_of_guest : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> No Of New Members: <strong> {{ (followReport) ?  followReport.no_of_new_member : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"><small style="font-style: italic">From guest list</small> Born-Again converts: <strong> {{ (followReport) ?  followReport.born_again_converts : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Holy Ghost Baptism: <strong> {{ (followReport) ?  followReport.holy_ghost_baptism : 0 }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Verified By</label>
                                                    <input type="text" class="form-control"  placeholder="Verified By">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Signature/Date: <strong> {{ (followReport) ?  followReport.created_at : '' }} </strong> </p>
                                                </div>
                                            </div>
                                        </div>

                                            <div class="row">
                                                <h5>Special Ceremony</h5> &nbsp;&nbsp;
                                                <ul class="list-unstyled mb-0">
                                                    <li class="d-inline-block mr-2">
                                                        <fieldset>
                                                            <div class="vs-checkbox-con vs-checkbox-primary">
                                                                <input type="checkbox"  value="false">
                                                                <span class="vs-checkbox">
                                                            <span class="vs-checkbox--check">
                                                                <i class="vs-icon feather icon-check"></i>
                                                            </span>
                                                        </span>
                                                                <span class="">Yes</span>
                                                            </div>
                                                        </fieldset>
                                                    </li>
                                                    <li class="d-inline-block mr-2">
                                                        <fieldset>
                                                            <div class="vs-checkbox-con vs-checkbox-primary">
                                                                <input type="checkbox">
                                                                <span class="vs-checkbox">
                                                            <span class="vs-checkbox--check">
                                                                <i class="vs-icon feather icon-check"></i>
                                                            </span>
                                                        </span>
                                                                <span class="">No</span>
                                                            </div>
                                                        </fieldset>
                                                    </li>

                                                </ul>
                                            </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <h1>Table is supposed to be here</h1>
                                            </div>

                                        </div>

                                        <br><br>
                                        <h5> <strong>PROTOCOL MINISTRY DETAILS</strong></h5>

                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Verified By</label>
                                                    <input type="text" class="form-control"  placeholder="Verified By">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Signature/Date: <strong> {{ (protocolReport) ?  protocolReport.created_at : '' }} </strong> </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-12">
                                                <div class="form-group">
                                                    <p class="font-medium-1"> Notes/Observations: <strong> {{ (protocolReport) ?  protocolReport.notes : '' }} </strong> </p>
                                                </div>
                                            </div>
                                        </div>
                                        <br><br>
                                        <h5> <strong>CHURCH SECRETARIAT</strong></h5>

                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Verified By</label>
                                                    <input type="text" class="form-control"  placeholder="Verified By">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Signature/Date</label>

                                                    <p class="font-medium-1"> Signature/Date: <strong> {{ (report) ?  report.created_at : '' }} </strong> </p>
                                                </div>
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
        report : Array,
        protocolReport : Object,
        mediaReport : Object,
        careReport : Object,
        followReport : Object,
        service_type : '',
        service_date : ''
    },
    data (){
        return {
            compoName : 'Report For '+ this.service_date,
            loader : false,
        }
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        })
    },

    methods: {
        print(){
            this.$htmlToPaper('printArea');
        }
    },

}
</script>

