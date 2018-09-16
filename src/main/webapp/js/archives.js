
$(document).ready(function() {
    $.timeliner({});
    $.timeliner({
        timelineContainer: '#timeline-js',
        timelineSectionMarker: '.milestone',
        oneOpen: true,
        startState: 'flat',
        expandAllText: '+ Show All',
        collapseAllText: '- Hide All'
    });
    // Colorbox Modal
    $(".CBmodal").colorbox({inline:true, initialWidth:100, maxWidth:682, initialHeight:100, transition:"elastic",speed:750});
});
