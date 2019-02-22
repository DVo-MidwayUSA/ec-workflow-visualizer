---
layout: layout.html
---

<div class="card col-3">
    <div class="card-body">
        Prioritization
        <div class="card">
            <div class="card-body">
                To be prioritized
                <span class="badge badge-secondary" id="toPrioritizeCount">--</span>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                Prioritized
                <span class="badge badge-secondary" id="prioritizedCount">--</span>
            </div>
        </div>
    </div>
</div>

<script>
    var database = firebase.database();
    
    var el1 = document.getElementById('toPrioritizeCount');
    doStuff(el1, 'stats/toPrioritize');

    var el2 = document.getElementById('prioritizedCount');
    doStuff(el2, 'stats/prioritized');

    function doStuff(el, ref) {
        var toPrioritizeCt = database.ref(ref);
        toPrioritizeCt.on('value', function(snap) {
            
            el.classList.add('badge-primary');
            el.classList.remove('badge-secondary');
            
            el.textContent = snap.val();

            setTimeout(function () {
                el.classList.add('badge-secondary');
                el.classList.remove('badge-primary');
            }, 1000);
        });
    }
</script>    