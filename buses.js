    $(document).ready(function () {
        $('#buses-list').DataTable({
            "paging": false, // false to disable sorting (or any other option)
            "oLanguage": {
                "sSearch": "Filter:"
            }
        });
        
        $('#buses-list-graveyard').DataTable({
            "paging": false, // false to disable sorting (or any other option)
            "oLanguage": {
                "sSearch": "Filter:"
            }
        });
        
        $('.dataTables_length').addClass('bs-select');
    });