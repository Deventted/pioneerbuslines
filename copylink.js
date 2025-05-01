$(function(){
    $('.copy-link').click(function() {
        $this = $(this);
        
        var url = $this.data("url");
        $dummy = $('<input>').val(url).appendTo('body').select()
        document.execCommand('copy')
        $dummy.remove(); 
        
        $.alert({
            title: '',
            content: 'Link copied to clipboard!',
        });
   });
});