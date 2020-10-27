<template>

</template>

<script>
export default {
data() {
    return {
    show: true,
    }
},
watch: {
    '$page.flash': {
    handler() {
        toastr.success('Operation Successfull');

        this.show = true
    },
    deep: true,
    },
},
}
</script>
