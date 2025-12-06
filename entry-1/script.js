 <script>
        document.addEventListener('DOMContentLoaded', function() {
            var knittingBtn = document.getElementById('knit-btn');
            var crochetBtn = document.getElementById('crochet-btn');
            var knittingInfo = document.getElementById('knitting-info');
            var crochetInfo = document.getElementById('crochet-info');

            knittingBtn.addEventListener('click', function() {
                knittingInfo.classList.remove('hidden');
                crochetInfo.classList.add('hidden');
                knittingBtn.classList.add('active');
                crochetBtn.classList.remove('active');
            });

            crochetBtn.addEventListener('click', function() {
                crochetInfo.classList.remove('hidden');
                knittingInfo.classList.add('hidden');
                crochetBtn.classList.add('active');
                knittingBtn.classList.remove('active');
            });
        });
    </script>