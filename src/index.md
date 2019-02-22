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
    var toPrioritizeCt = database.ref('stats/toPrioritize');
    toPrioritizeCt.on('value', function(snap) {
        document.getElementById('toPrioritizeCount').textContent = snap.val();
    });

    var prioritizeCt = database.ref('stats/prioritized');
    prioritizeCt.on('value', function (snap) {
        document.getElementById('prioritizedCount').textContent = snap.val();
    });
</script>    