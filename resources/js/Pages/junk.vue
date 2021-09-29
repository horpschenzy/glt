<template>
    <layout id="slide-in">
        <title-bar :name="compoName"></title-bar>
        <section id="multiple-column-form">
            <div class="row match-height">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Report Form</h2>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <form class="form">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Date</label>
                                                    <input type="date"  class="form-control" placeholder="First Name" name="fname-column">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Duration of Service</label>
                                                    <input type="text" class="form-control" placeholder="Duration of Service" >
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <label >Name Of Service</label>
                                                    <input type="text" class="form-control" placeholder="Name Of Service">
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <label>Start Time</label>
                                                    <input type="time" class="form-control"  placeholder="Start Time">
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <label >End Time</label>

                                                    <input type="time"  class="form-control" name="End Time" placeholder="Company">
                                                </div>
                                            </div>
                                        </div>
                                            <h3> <strong>ATTENDANCE:</strong></h3>
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
                                                            <td><input type="text" placeholder="Male"></td>
                                                            <td><input type="text" placeholder="Female"></td>
                                                            <td><input type="text" placeholder="Children (male)"></td>
                                                            <td><input type="text" placeholder="Children (female)"></td>
                                                            <td><input type="text" placeholder="Teenage (male)"></td>
                                                            <td><input type="text" placeholder="Teenage (female)"></td>
                                                            <td><input type="text" placeholder="Total"></td>

                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <br><br>
                                            <h3> <strong>MEDIA MINISTRY DETAILS</strong></h3>

                                            <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Name Of Minister</label>
                                                    <input type="text"  class="form-control" placeholder="Name Of Minister">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Title/Topic</label>
                                                    <input type="text" class="form-control" placeholder="Title/Topic" >
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="form-group">
                                                    <label >Duration Of Minister</label>
                                                    <input type="text" class="form-control" placeholder="Duration Of Minister">
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
                                                    <label>Signature/Date</label>

                                                    <input type="text"  class="form-control" name="" placeholder="Signature/Date">
                                                </div>
                                            </div>
                                            </div>
                                        <br><br>
                                        <h3> <strong>CARE MINISTRY DETAILS</strong></h3>

                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>No Of Guests</label>
                                                    <input type="text"  class="form-control" placeholder="No Of Guests">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>No of New Members</label>
                                                    <input type="text" class="form-control" placeholder="No of New Members" >
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label> <small style="font-style: italic">From guest list</small> Born-Again converts</label>
                                                    <input type="text" class="form-control" placeholder="Duration Of Minister">
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label>Holy Ghost Baptism</label>

                                                    <input type="text"  class="form-control" name="Signature/Date" placeholder="Holy Ghost Baptism">
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label>Verified By</label>
                                                    <input type="text" class="form-control"  placeholder="Verified By">
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label>Signature/Date</label>

                                                    <input type="text"  class="form-control" name="" placeholder="Signature/Date">
                                                </div>
                                            </div>
                                        </div>
                                        <br><br>
                                        <h3> <strong>FOLLOW-UP MINISTRY DETAILS</strong></h3>

                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>No Of Guests</label>
                                                    <input type="text"  class="form-control" placeholder="No Of Guests">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>No of New Members</label>
                                                    <input type="text" class="form-control" placeholder="No of New Members" >
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label> <small style="font-style: italic">During service</small> Born-Again converts</label>
                                                    <input type="text" class="form-control" placeholder="Duration Of Minister">
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label>Holy Ghost Baptism</label>

                                                    <input type="text"  class="form-control" name="Signature/Date" placeholder="Holy Ghost Baptism">
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label>Verified By</label>
                                                    <input type="text" class="form-control"  placeholder="Verified By">
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12">
                                                <div class="form-group">
                                                    <label>Signature/Date</label>

                                                    <input type="text"  class="form-control" name="Signature/Date" placeholder="Company">
                                                </div>
                                            </div>
                                        </div>

                                            <div class="row">
                                                <h3>Special Ceremony</h3> &nbsp;&nbsp;
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
                                        <h3> <strong>PROTOCOL MINISTRY DETAILS</strong></h3>

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

                                                    <input type="text"  class="form-control" name="Signature/Date" placeholder="Company">
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-12">
                                                <div class="form-group">
                                                    <label>Notes/Observations</label>
                                                    <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Notes/Observations"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <br><br>
                                        <h3> <strong>CHURCH SECRETARIAT</strong></h3>

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

                                                    <input type="text"  class="form-control" name="Signature/Date" placeholder="Company">
                                                </div>
                                            </div>
                                        </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light">Submit</button>
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
            compoName : 'Report',
            loader : false,
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

