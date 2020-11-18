<template>
    <div>
        <layout>
            <title-bar :name="compoName"></title-bar>
            <div class="row" id="slide-in">
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body card-dashboard mb-2">
                                <div class="pull-right">
                                    <button v-if="is('head-of-ministry | ahom | follow-up')"  class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#askQuestionModal">
                                        <i class="feather icon-home"></i> Ask Question
                                    </button>
                                </div>
                                <h4 class="card-title"> Questions</h4>
                                <div class="table-responsive mt-2">
                                    <table class="table table-hover zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>Title </th>
                                            <th>Questions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(help, key) in helps" v-bind:key="help.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ help.title }}</td>
                                            <td>{{help.question}}</td>
<!--                                            <td>-->
<!--                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(help);" data-toggle="modal"  data-target="#askQuestionModal"><i class="feather icon-edit"></i></button>-->
<!--                                            </td>-->
                                        </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade text-left" id="askQuestionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Help </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                            <div class="modal-body row m-1">
                                <div class="row">
                                    <div class="form-group col-12">
                                        <label for="first-name-icon">Title</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="text" v-model="form.title" placeholder="Title" required=""  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-home"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-12">
                                        <label for="first-name-icon">Question</label>
                                        <div class="position-relative has-icon-left">
                                            <textarea v-model="form.question"  cols="45" rows="10"></textarea>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Send</button>
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
        helps: Array,
    },
    data (){
        return {
            compoName : 'DeveloperHelp',
            loader : false,
            addEdit : '',
            form: {
                title: '',
                question: '',
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
        submit() {
            this.loader = true;
            axios.post("/help/add", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    $('#askQuestionModal').modal('hide');
                    this.$inertia.visit('help');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },

        currentRec(help){
            this.addEdit = 'Edit';
            this.form = help;
        },

        clearRec(){
            this.addEdit = 'Add';
            this.form = {};
        }
    },

}
</script>


