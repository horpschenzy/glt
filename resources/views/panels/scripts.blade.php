{{-- Vendor Scripts --}}
<script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>

<script src="/vendors/js/vendors.min.js"></script>
<script src="/vendors/js/ui/prism.min.js"></script>

<script src="{{asset('vendors/js/extensions/jquery.steps.min.js')}}"></script>
<script src="{{asset('vendors/js/forms/validation/jquery.validate.min.js')}}"></script>
<!-- Theme Scripts -->
<script src="{{ asset(('js/core/app-menu.js')) }}"></script>
<script src="{{ asset(('js/core/app.js')) }}"></script>



<!-- BEGIN: Theme JS-->
<script src="/js/scripts/components.js"></script>
<!-- END: Theme JS-->

<!-- BEGIN: Page Vendor JS-->

<!-- END: Page Vendor JS-->

<!-- BEGIN: Page JS-->
<script src="/js/scripts/datatables/datatable.js" defer></script>
<!-- END: Page JS-->
{{--  <script src="/js/scripts/extensions/dropzone.min.js"></script>  --}}

<!-- BEGIN: Page Vendor JS-->
<script src="/vendors/js/extensions/sweetalert2.all.min.js"></script>
<script src="/vendors/js/extensions/polyfill.min.js"></script>

<!-- Date Picker -->
<script src="/vendors/js/pickers/pickadate/legacy.js"></script>
<script src="/vendors/js/pickers/pickadate/picker.js"></script>
<script src="/vendors/js/pickers/pickadate/picker.date.js"></script>
<!-- BEGIN: Page JS-->

<!-- BEGIN: Page Vendor JS-->
{{--<script src="{{asset('vendors/js/extensions/jquery.steps.min.js')}}"></script>--}}
{{--<script src="{{asset('vendors/js/forms/validation/jquery.validate.min.js')}}"></script>--}}

{{--<!-- BEGIN: Page Vendor JS-->--}}
<!-- END: Page Vendor JS-->

<!-- END: Page Vendor JS-->
<!-- BEGIN: Page JS-->
<script src="/js/scripts/forms/wizard-steps.js"></script>
<!-- END: Page JS-->
{{--<script src="{{asset('js/scripts/forms/wizard-steps.js')}}"></script>--}}
<!-- END: Page JS-->
{{--  <script src="https://cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/js/dropify.min.js"></script>  --}}
<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script src="/vendors/js/tables/datatable/datatables.min.js"></script>
<script src="/vendors/js/tables/datatable/datatables.buttons.min.js"></script>
<script src="/vendors/js/tables/datatable/buttons.bootstrap.min.js"></script>
<script src="/vendors/js/tables/datatable/datatables.bootstrap4.min.js"></script>
<!-- END: Page Vendor JS-->
<script src="/js/scripts/pages/user-profile.js"></script>

<script src="/js/scripts/extensions/sweet-alerts.js"></script>
{{--  <script src="/js/scripts/pages/account-setting.js"></script>  --}}

{{--  <script>
    let API_POPUP_URL = "{{ env('API_POPUP_URL') }}";
</script>  --}}

<!-- Toast -->
<script src="/vendors/js/extensions/toastr.min.js"></script>
<script src="/js/scripts/extensions/toastr.js"></script>
<script src="https://unpkg.com/vue-html-to-paper/build/vue-html-to-paper.js"></script>


<!-- BEGIN: Page Apex JS-->
<!-- <script src="vendors/js/charts/apexcharts.min.js"></script>
<script src="/js/scripts/charts/chart-apex.js"></script> -->

<!-- END: Page Apex JS-->
<script src="/js/scripts/ui/data-list-view.js"></script>
<script>
    function selectActiveMenu(){
        $(function() {
            $('a[href$="' + location.pathname.split("/")[1] + '"]').closest('li').addClass('active');
            });
    }
</script>
<script>
    $('#summernotes').summernote({
      placeholder: 'Hello Bootstrap 4',
      tabsize: 2,
      height: 100
    });
  </script>
{{--  <script src="https://cdn.jsdelivr.net/npm/findindex_polyfill_mdn"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>  --}}




