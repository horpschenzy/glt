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
                                    <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addUnitModal">
                                        <i class="feather icon-home"></i> Add Units
                                    </button>
                                </div>
                                <h4 class="card-title"> Units</h4>
                                <div class="table-responsive mt-2">
                                    <table class="table table-hover zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>Units ID</th>
                                            <th>Units Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(unit, key) in units" v-bind:key="unit.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ unit.unit_name }}</td>
                                            <td>
                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(unit);" data-toggle="modal"  data-target="#addUnitModal"><i class="feather icon-edit"></i></button>
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteUnit(unit.id);"><i class="feather icon-delete"></i></button>
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

            <div class="modal fade text-left" id="addUnitModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Unit </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                            <div class="modal-body row m-1">
                                <div class="row">
                                    <div class="form-group col-12">
                                        <label for="first-name-icon">Unit Name</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="text" v-model="form.unit_name" placeholder="Unit Name" required=""  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-home"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" v-model="form.id" id="">
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
        units: Array,
    },
    data (){
        return {
            compoName : 'Unit',
            loader : false,
            addEdit : '',
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
        deleteUnit(id) {
            this.$swal({
                title: 'Delete Unit?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Delete it!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    axios.get("/unit/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('unit');

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


