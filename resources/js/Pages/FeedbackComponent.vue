<template>
    <layout>
        <div class="pull-right">
            <inertiaLink href="/members" class="btn btn-primary">
                <i class="feather icon-home"></i> BACK
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
        <div class="row" id="slide-in">
            <div class="col-12 ">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body card-dashboard mb-2">
                            <div class="pull-right">
                                <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addFeedbackModal">
                                        <i class="feather icon-home"></i> Add Feedback
                                    </button>
                            </div>
                            <h4 class="card-title" >Members</h4>
                            <div class="table-responsive">
                                <table class="table table-hover zero-configuration">
                                    <thead>

                                            <tr>
                                                <th>S/N</th>
                                                <th>Feedback Type</th>
                                                <th>Feedback Report</th>
                                                <th>Date Added</th>
                                                <th v-if="is('super-admin')">Date Created</th>
                                                 <th>Action</th>

                                            </tr>

                                    </thead>
                                    <tbody>
                                        <tr v-for="(feedback, key) in feedbacks" :key="key">
                                            <td>{{ key + 1 }}</td>
                                            <td class="product-name">{{ feedback.feedbackType }}</td>
                                            <td class="product-category">{{ feedback.feedbackReport }}</td>
                                            <td class="product-category">{{ feedback.date_added }}</td>
                                            <td class="product-category" v-if="is('super-admin')">{{ feedback.created_at}}</td>
                                            <td>
                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(feedback);" data-toggle="modal"  data-target="#addFeedbackModal"><i class="feather icon-edit"></i></button>

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

        <div class="modal fade text-left" id="addFeedbackModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered " role="document">
                    <div class="modal-content modal-dialog-scrollable">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Feedback </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                            <div class="modal-body row m-1">
                                <div class="row">
                                    <div class="form-group col-12">
                                        <label>Feedback Type</label>
                                        <div class="position-relative has-icon-left">
                                            <select class="form-control" v-model="form.feedbackType" required>
                                                <option value="">Select Type</option>
                                                <option value="Called">Called</option>
                                                <option value="Sent Email">Sent Email</option>
                                                <option value="Text">Text </option>
                                                <option value="Visited ">Visited </option>
                                            </select>
                                            <div class="form-control-position">
                                                <i class="feather icon-home"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-12">
                                        <label>Date of Report</label>
                                        <div class="position-relative">
                                            <input type="datetime-local" v-model="form.date_added" class="form-control">
                                        </div>
                                    </div>

                                    <div class="form-group col-12">
                                        <label>Feedback Report</label>
                                        <div class="position-relative">
                                            <textarea v-model="form.feedbackReport" class="form-control" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <input type="hidden" v-model="form.id" id="">
                                    <input type="hidden" v-model="form.member_id">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Save</button>
                            </div>
                        </form>
                    </div>
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
        feedbacks: Array,
        member_id: ''
    },
    data (){
        return {
            compoName : 'Feedback',
            loader : false,
            form: {
                feedbackType: '',
                feedbackReport: '',
                member_id: this.member_id,
                date_added:'',
                id: ''
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
        submit(){
            this.loader = true;
            axios.post("/add/feedback", this.form)
            .then(response => {
                toastr.success(response.data.success, 'Success');
                $('#addFeedbackModal').modal('hide');
                this.$inertia.visit('/feedback/'+this.member_id);
                this.loader = false;
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');
            });
        },


        currentRec(feedback){
            this.addEdit = 'Edit';
            this.form = feedback;
        },

        clearRec(){
            this.addEdit = 'Add';
            this.form = {};
            this.form.member_id = this.member_id;
        }
    },

}
</script>


