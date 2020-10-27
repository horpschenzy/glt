<template>
    <layout>
        <title-bar :name="compoName"></title-bar>
        <div class="row" id="slide-in">
            <div class="col-12 ">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body card-dashboard mb-2">
                            <div class="pull-right">
                                <inertiaLink href="/members/add" class="btn btn-primary">
                                    <i class="feather icon-user"></i> Add Members
                                </inertiaLink>
                            </div>
                            <h4 class="card-title">Members</h4>
                            <div class="table-responsive">
                                <table class="table table-hover zero-configuration">
                                    <thead>
                                        <tr>
                                            <tr>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Email</th>
                                                <th>Phone number</th>
                                                <th>Extension</th>
                                                <th>Role</th>
                                                <th>Ministry</th>
                                                <th>Unit</th>
                                                <th>Progress</th>
                                                <th>Action</th>  
                                                                             
                                            </tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(member, key) in members" :key="key">
                                            <td>{{ member.last_name }} {{ member.first_name }} {{ member.other_names }}</td>
                                            <td class="product-img">
                                                <div class="avatar mr-1 avatar-xl">
                                                    <img :src="member.image" alt="Img placeholder">
                                                </div>
                                            </td>
                                            <td class="product-name">{{ member.email_address }}</td>
                                            <td class="product-category">{{ member.phone_number }}</td>
                                            <td class="product-category">{{ (member.extension) ? member.extension.ext_name:'' }}</td>
                                            <td class="product-category">{{ (member.role_id)? formatString(member.role.name): '' }}</td>
                                            <td class="product-category">{{ (member.ministry)? member.ministry.min_name: '' }}</td>
                                            <td class="product-category">{{ (member.unit)? member.unit.unit_name: '' }}</td>
                                            <td>
                                                <div class="progress progress-bar-success">
                                                    <div class="progress-bar" role="progressbar" :aria-valuenow="(member.progress/4 * 100)" :aria-valuemin="(member.progress/4 * 100)" aria-valuemax="100" :style="'width:'+ member.progress/4 * 100 + '%'"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <inertia-link :href="'/member/update/'+member.id" class="btn btn-success btn-rounded btn-sm" ><i class="feather icon-edit"></i></inertia-link>
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteMember(member.id);"><i class="feather icon-delete"></i></button>
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
        members: Array
    },
    data (){
        return {
            compoName : 'Members',
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
        formatString(val){
            var first = val.replace("-", " "); 
            var second =  first.replace("-", " ");
            return second.toUpperCase()

        },
        deleteMember(id) {
                this.$swal({
                    title: 'Delete Member?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/member/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('members');

                        }).catch(error => {
                            toastr.error(error.response.data.message, 'Error');
                        });
                    } else {
                        this.$swal('Cancelled', 'Your file is still intact', 'info')
                    }
                })
            },
    },

}
</script>


