<template>
    <layout id="slide-in">
        <div class="pull-right">
            <inertiaLink href="/view/report" class="btn btn-primary">
                <i class="feather icon-home"></i> View Reports.
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
        <section>
            <div class="row">
                <div class="card border-0 shadow-none collapse-icon accordion-icon-rotate" style="width: 100%">
                    <div class="card-body p-0">
                        <div class="accordion search-content-info" id="accordionExample">
                            <div class="collapse-margin search-content mt-0">
                                <div class="card-header" style="padding-bottom: 10px" id="headingOne" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <span class="lead collapse-title">
                                        HOM Care Report
                                    </span>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="col-12">
                                        <div class="">
                                            <div class="card-content">
                                                <div class="card-body">
                                                    <form class="form" method="POST" action="#" @submit.prevent="submitCare">
                                                        <div class="form-body">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="month">Select Month</label>
                                                                                <select class="custom-select form-control" id="month" v-model="form.month" required>
                                                                                    <option value="">Select Month</option>
                                                                                    <option value="January">January</option>
                                                                                    <option value="February">February</option>
                                                                                    <option value="March">March</option>
                                                                                    <option value="April">April</option>
                                                                                    <option value="May">May</option>
                                                                                    <option value="June">June</option>
                                                                                    <option value="July">July</option>
                                                                                    <option value="August">August</option>
                                                                                    <option value="September">September</option>
                                                                                    <option value="October">October</option>
                                                                                    <option value="November">November</option>
                                                                                    <option value="December">December</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="ministry">Ministry :</label>
                                                                                <select class="custom-select form-control" id="ministry_id" v-model="form.ministry_id" required>
                                                                                    <option value=""> -- select an option -- </option>
                                                                                    <option v-for="(ministry, index) in ministries" :key="index" :value="ministry.id">{{ministry.min_name}} </option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="name">Vision For the Year</label>
                                                                                <input type="text" class="form-control" id="vision" v-model="form.yearVision" required maxlength="50">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="vision"> Vision for the Month</label>
                                                                                <input type="text" class="form-control" id="monthvision" v-model="form.monthVision" required maxlength="50">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="name"> Goals for the Month </label>
                                                                                <textarea class="form-control" type="textarea" v-model="goals" id="goals" placeholder="Your Goals" maxlength="6000" rows="4"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="name"> Goals Achieved </label>
                                                                                <textarea class="form-control" type="textarea" v-model="form.achieved" id="achieved" placeholder="Your Goals Achieved" maxlength="6000" rows="4"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="form-group">
                                                                                <label for="name"> Comments on Members</label>
                                                                                <textarea class="form-control" type="textarea" v-model="form.comments" id="comment" placeholder="Your Comments" maxlength="6000" rows="4"></textarea>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            <div class="col-12">
                                                                <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="collapse-margin search-content">
                                <div class="card-header" style="padding-bottom: 10px" id="headingThree" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span class="lead collapse-title collapsed">
                                        AHOM Care Report
                                    </span>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="col-12">
                                        <div class="">
                                            <div class="card-content">
                                                <div class="card-body">
                                                    <form class="form" method="POST" action="#" @submit.prevent="submitAhomCare">
                                                        <div class="form-body">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="month">Select Month</label>
                                                                                <select class="custom-select form-control" id="month" v-model="form.month" required>
                                                                                    <option value="">Select Month</option>
                                                                                    <option value="January">January</option>
                                                                                    <option value="February">February</option>
                                                                                    <option value="March">March</option>
                                                                                    <option value="April">April</option>
                                                                                    <option value="May">May</option>
                                                                                    <option value="June">June</option>
                                                                                    <option value="July">July</option>
                                                                                    <option value="August">August</option>
                                                                                    <option value="September">September</option>
                                                                                    <option value="October">October</option>
                                                                                    <option value="November">November</option>
                                                                                    <option value="December">December</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="ministry">Ministry :</label>
                                                                                <select class="custom-select form-control" id="ministry_id" v-model="form.ministry_id" required>
                                                                                    <option value=""> -- select an option -- </option>
                                                                                    <option v-for="(ministry, index) in ministries" :key="index" :value="ministry.id">{{ministry.min_name}} </option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="name">Vision For the Year</label>
                                                                                <input type="text" class="form-control" id="vision" v-model="form.yearVision" required maxlength="50">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="vision"> Vision for the Month</label>
                                                                                <input type="text" class="form-control" id="monthvision" v-model="form.monthVision" required maxlength="50">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="name"> Goals for the Month </label>
                                                                                <textarea class="form-control" type="textarea" v-model="goals" id="goals" placeholder="Your Goals" maxlength="6000" rows="4"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="name"> Goals Achieved </label>
                                                                                <textarea class="form-control" type="textarea" v-model="form.achieved" id="achieved" placeholder="Your Goals Achieved" maxlength="6000" rows="4"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="form-group">
                                                                                <label for="name"> Comments on Members</label>
                                                                                <textarea class="form-control" type="textarea" v-model="form.comments" id="comment" placeholder="Your Comments" maxlength="6000" rows="4"></textarea>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <h5>CARE: INCOME </h5>
                                                                        <table id="myTable" class="table order-list">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td>#</td>
                                                                                    <td>Item</td>
                                                                                    <td>Description</td>
                                                                                    <td>Amount</td>
                                                                                    <td>Action</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr v-for="(row, index) in form.rows" :key="index">
                                                                                    <td>{{ index + 1 }}</td>
                                                                                    <td>
                                                                                        <input type="text" v-model="row.item" class="form-control" required/>
                                                                                    </td>
                                                                                    <td>
                                                                                        <input type="text" v-model="row.description"  class="form-control" required/>
                                                                                    </td>
                                                                                    <td>
                                                                                        <input type="number" v-model="row.amount"  class="form-control" required/>
                                                                                    </td>
                                                                                    <td>
                                                                                        <input @click="removeElement(index, 'income')" type="button" class="btn btn-lg btn-danger" id="addrow" value="Remove Row" />

                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot>
                                                                                <tr>
                                                                                    <td colspan="5" style="text-align: left;">
                                                                                        <input @click="addRow('income')" type="button" class="btn btn-lg btn-block btn-outline-primary" id="addrow" value="Add Row" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                </tr>
                                                                            </tfoot>
                                                                        </table>
                                                                    </div>
                                                                    <div class="row">
                                                                        <h5>CARE: EXPENSES </h5>
                                                                        <table id="myTable" class="table order-list">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td>#</td>
                                                                                    <td>Item</td>
                                                                                    <td>Description</td>
                                                                                    <td>Amount</td>
                                                                                    <td>Action</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr v-for="(row, index) in form.expensesRows" :key="index">
                                                                                    <td>{{ index + 1 }}</td>
                                                                                    <td>
                                                                                        <input type="text" v-model="row.item" class="form-control" required/>
                                                                                    </td>
                                                                                    <td>
                                                                                        <input type="text" v-model="row.description"  class="form-control" required/>
                                                                                    </td>
                                                                                    <td>
                                                                                        <input type="number" v-model="row.amount"  class="form-control" required/>
                                                                                    </td>
                                                                                    <td>
                                                                                        <input @click="removeElement(index, 'expenses')" type="button" class="btn btn-lg btn-danger" value="Remove Row" />

                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot>
                                                                                <tr>
                                                                                    <td colspan="5" style="text-align: left;">
                                                                                        <input @click="addRow('expenses')" type="button" class="btn btn-lg btn-block btn-outline-primary" id="addrow" value="Add Row" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                </tr>
                                                                            </tfoot>
                                                                        </table>
                                                                    </div>
                                                            <div class="col-12">
                                                                <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="collapse-margin search-content">
                                <div class="card-header" style="padding-bottom: 10px" id="headingFour" role="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <span class="lead collapse-title collapsed">
                                        Service Report
                                    </span>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <!-- MEDIA -->
                                        <div class="col-12" v-if="ministry_name == 'glt' || ministry_name == 'Media Ministry'">
                                            <div class="">
                                                <div class="card-header" style="padding-bottom: 10px">
                                                    <h2 class="card-title">Media Ministry</h2>
                                                </div>
                                                <div class="card-content">
                                                    <div class="card-body">
                                                        <form class="form" method="POST" action="#" @submit.prevent="submit">
                                                            <div class="form-body">
                                                                <div class="row">
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service Date</label>
                                                                            <input type="date"  class="form-control" v-model="form.service_date" required>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service type</label>
                                                                            <select class="custom-select form-control" id="servicetype" v-model="form.service_type" required>
                                                                                <option value="">Select Service Type</option>
                                                                                <option value="Sunday Service">Sunday Service</option>
                                                                                <option value="Special Miracle Service">SMS</option>
                                                                                <option value="Bible study">Bible Study</option>
                                                                                <option value="Vigil">Vigil</option>
                                                                                <option value="SOTM Event">SOTM Event</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label >Name Of Minister</label>
                                                                            <input type="text" class="form-control" placeholder="Name Of Minister" v-model="form.minister_name">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Title/Topic</label>
                                                                            <input type="text" class="form-control" placeholder="Enter Title/Topic" v-model="form.topic">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Duration Of Ministeration</label>
                                                                            <input type="text" class="form-control" placeholder="Duration Of Ministeration" v-model="form.duration">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <!-- PROTOCOL -->
                                        <div class="col-12" v-if="ministry_name == 'glt' || ministry_name == 'Protocol Ministry'">
                                            <div class="">
                                                <div class="card-header">
                                                    <h2 class="card-title">Protocol Ministry</h2>
                                                </div>
                                                <div class="card-content">
                                                    <div class="card-body">
                                                        <form class="form" method="POST" action="#" @submit.prevent="submit">
                                                            <div class="form-body">
                                                                <div class="row">
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service Date</label>
                                                                            <input type="date"  class="form-control" v-model="form.service_date" required>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service type</label>
                                                                            <select class="custom-select form-control" id="servicetype" v-model="form.service_type" required>
                                                                                <option value="">Select Service Type</option>
                                                                                <option value="Sunday Service">Sunday Service</option>
                                                                                <option value="Special Miracle Service">SMS</option>
                                                                                <option value="Bible study">Bible Study</option>
                                                                                <option value="Vigil">Vigil</option>
                                                                                <option value="SOTM Event">SOTM Event</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Male:</label>
                                                                            <input type="number" class="form-control" placeholder="Enter Male Attendance" v-model="form.male">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Female:</label>
                                                                            <input type="number" class="form-control" placeholder="Enter Female Attendance" v-model="form.female">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Male Children:</label>
                                                                            <input type="number" class="form-control" placeholder="Enter Male Children's Attendance" v-model="form.male_child">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Female Children:</label>
                                                                            <input type="number" class="form-control" placeholder="Enter Female Children's Attendance" v-model="form.female_child">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Male Teenage:</label>
                                                                            <input type="number" class="form-control" placeholder="Enter Male Teenage's Attendance" v-model="form.male_teenage">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Female Teenage:</label>
                                                                            <input type="number" class="form-control" placeholder="Enter Female Teenage's Attendance" v-model="form.female_teenage">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label>Total:</label>
                                                                            <input type="number" class="form-control" placeholder="Enter Total Attendance" v-model="form.total">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <!-- FOLLOW-UP -->
                                        <div class="col-12" v-if="ministry_name == 'glt' || ministry_name == 'Follow up Ministry'">
                                            <div class="">
                                                <div class="card-header">
                                                    <h2 class="card-title">Follow Up Ministry</h2>
                                                </div>
                                                <div class="card-content">
                                                    <div class="card-body">
                                                        <form class="form" method="POST" action="#" @submit.prevent="submit">
                                                            <div class="form-body">
                                                                <div class="row">
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service Date</label>
                                                                            <input type="date"  class="form-control" v-model="form.service_date" required>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service type</label>
                                                                            <select class="custom-select form-control" id="servicetype" v-model="form.service_type" required>
                                                                                <option value="">Select Service Type</option>
                                                                                <option value="Sunday Service">Sunday Service</option>
                                                                                <option value="Special Miracle Service">SMS</option>
                                                                                <option value="Bible study">Bible Study</option>
                                                                                <option value="Vigil">Vigil</option>
                                                                                <option value="SOTM Event">SOTM Event</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>No Of Guests.</label>
                                                                            <input type="number" class="form-control" placeholder="No Of Guests." v-model="form.no_of_guest">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>No Of New members.</label>
                                                                            <input type="number" class="form-control" placeholder="No Of New members." v-model="form.no_of_new_member">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>During service Born-Again converts:</label>
                                                                            <input type="number" class="form-control" placeholder="During service Born-Again converts" v-model="form.born_again_converts">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Holy Ghost Baptism:</label>
                                                                            <input type="number" class="form-control" placeholder="Holy Ghost Baptism" v-model="form.holy_ghost_baptism">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <!-- CHURCH Secretariat -->
                                        <div class="col-12" v-if="ministry_name == 'glt' || ministry_name == 'Church Secretariat'">
                                            <div class="">
                                                <div class="card-header">
                                                    <h2 class="card-title">Church Secretariat</h2>
                                                </div>
                                                <div class="card-content">
                                                    <div class="card-body">
                                                        <form class="form" method="POST" action="#" @submit.prevent="submit">
                                                            <div class="form-body">
                                                                <div class="row">
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service Date</label>
                                                                            <input type="date"  class="form-control" v-model="form.service_date" required>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Service type</label>
                                                                            <select class="custom-select form-control" id="servicetype" v-model="form.service_type" required>
                                                                                <option value="">Select Service Type</option>
                                                                                <option value="Sunday Service">Sunday Service</option>
                                                                                <option value="Special Miracle Service">SMS</option>
                                                                                <option value="Bible study">Bible Study</option>
                                                                                <option value="Vigil">Vigil</option>
                                                                                <option value="SOTM Event">SOTM Event</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label >Start Time</label>
                                                                            <input type="time" class="form-control" v-model="form.start_time">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label >End Time</label>
                                                                            <input type="time" class="form-control" v-model="form.end_time">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Duration Of service</label>
                                                                            <input type="text" class="form-control" placeholder="Duration Of service" v-model="form.duration">
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Notes-Observation:</label>
                                                                            <textarea  class="form-control" v-model="form.notes" id="notesObservation" rows="5"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light"><i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
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
        ministry_name : String,
        ministries : Array
    },
    data (){
        return {
            compoName : 'Report',
            loader : false,
            form: {
                service_date : '',
                service_type : '',
                minister_name : '',
                topic : '',
                duration : '',
                male : 0,
                female : 0,
                male_child : 0,
                female_child : 0,
                male_teenage : 0,
                female_teenage : 0,
                total : 0,
                no_of_guest : 0,
                no_of_new_member : 0,
                born_again_converts : 0,
                holy_ghost_baptism : 0,
                start_time : '',
                end_time : '',
                notes : '',
                month : '',
                ministry_id : '',
                yearVision : '',
                monthVision : '',
                goals : '',
                achieved : '',
                comments : '',
                user_type : '',
                rows: [],
                expensesRows: [],
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
        submitAhomCare(){
            this.form.user_type = 'ahom';
            this.loader = true;
            axios.post("/add/carereport", this.form)
            .then(response => {
            toastr.success(response.data.success, 'Success');
                this.$inertia.visit('/report');
                this.loader = false;
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.error, 'Error');

            });
        },

        submitCare(){
            this.form.user_type = 'hom';
            this.loader = true;
            axios.post("/add/carereport", this.form)
            .then(response => {
            toastr.success(response.data.success, 'Success');
                this.$inertia.visit('/report');
                this.loader = false;
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.error, 'Error');

            });
        },

        submit(){

            this.loader = true;
            axios.post("/add/servicereport", this.form)
            .then(response => {
            toastr.success(response.data.success, 'Success');
                this.$inertia.visit('/report');
                this.loader = false;
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.error, 'Error');

            });
        },

        addRow: function(type) {
            if (type == 'expenses') {
                var elem = document.createElement('tr');
                this.form.expensesRows.push({
                    item: "",
                    description: "",
                    amount: 0
                });
            }else{
                
                var elem = document.createElement('tr');
                this.form.rows.push({
                    item: "",
                    description: "",
                    amount: 0
                });
            }
        },

        removeElement: function(index, type) {
            if(type == 'expenses'){
                this.form.expensesRows.splice(index, 1);
            }else{
                this.form.rows.splice(index, 1);
            }
        },
    },

}
</script>

