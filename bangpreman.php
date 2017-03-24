


 <html>
<body style="margin:0; padding:0;">

<table id="tablejackpot" width="" height="245" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td class="hdg_jackpot" align="center">MENANGKAN JACKPOT HARIAN</td>
    </tr>
    <tr>
      <td class="img_jackpot" align="center"><a href="http://www.gunungpoker.com" target="_blank"><img border="0" style="margin-top:20px;" src="images/jackpot_logo.png"></a></td>
    </tr>
    <tr>
      <td class="content_jackpot" align="center"><div class="total"><span style="text-decoration:blink;">25754000</span></div></td>
    </tr>
  	<tr>
      <td class="foot_jackpot" align="center"><a href="http://www.gunungpoker.com" target="_blank">MAINKAN SEKARANG | WWW.GUNUNGPOKER.COM</a></a></td>
    </tr>
</table>

<input type="hidden" id="nilai_jackpot" name="nilai_jackpot" value="25754000">
<script type="text/javascript" src="js/jquery-1.6.2.js"></script>

<script type="text/javascript">
    $(document).ready(function() {
        var delay = 700000;
        var jackpot = 0;
        var timer;

        pull_jackpot();
        function pull_jackpot() {
            var nominal = parseInt($('#nilai_jackpot').val());
            if (jackpot == 0) {
				jackpot = parseInt(nominal - 100000);
			}
            var amount = 100000 / delay * 1;
            timer = setInterval(function() { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
        }

        function set_jackpot(jackpot, nominal, amount) {
            var jackpot = jackpot + amount;
            if (jackpot >= nominal) {
                clearInterval(timer);
                pull_jackpot();
            } else {
                var result = addCommas(parseInt(jackpot));
                $('.total').html(result);
            }
			
            return jackpot;
        }
        function addCommas(nStr) {
            nStr += '';
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }
    });
</script>


<style type="text/css">

#tablejackpot {
border-collapse:collapse;
font-family:calibri;
background:url(images/jackpot_bgbody.jpg) repeat-x center top;
}

#tablejackpot tr td {
margin:0; padding:0;
}

#tablejackpot tr td:first-child {
}


/* HEADING JACKPOT (MENANNGKAN JACKPOT HARIAN) */
#tablejackpot tr td.hdg_jackpot {
background:url(images/jackpot_header.png) repeat-x top;
background-color:#342900;
line-height:28px;
color:#fff;
font-size:14px;
font-family:arial;
font-weight:bold;
padding:0px 0;
border:1px solid #2b1d09;
text-shadow:1px 1px 0 #000;
}

/* CONTENT JACKPOT (MAINKAN SEKARANG) */
#tablejackpot tr td.content_jackpot {
}

#tablejackpot tr td.content_jackpot .total {
background:url(images/jackpot_content.png) no-repeat center;
color:#ffde00;
font-size:2em;
padding:0px 0;
font-family:arial;
font-weight:bold;
width:237px;
height:114px;
line-height:114px;
}


/* IMAGE JACKPOT (ADA LOGO IDRPOKER) */
#tablejackpot tr td.img_jackpot {
}

/* FOOT JACKPOT (JUMLAH JACKPOT) */
#tablejackpot tr td.foot_jackpot {
background:url(images/jackpot_header.png) repeat-x top;
background-color:#2b1d09;
line-height:20px;
border:1px solid #2b1d09;
}

#tablejackpot tr td.foot_jackpot a {
font-family:calibri;
color:#fff;
font-size:11px;
font-weight:normal;
text-decoration:none;
}

@font-face {
    font-family: 'calibri';
    src: url('template/001/fonts/calibri/calibri.eot');
    src: url('template/001/fonts/calibri/calibri.eot?#iefix') format('embedded-opentype'),
         url('template/001/fonts/calibri/calibri.svg#calibri') format('svg');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'calibrib';
    src: url('template/001/fonts/calibri/calibrib.eot');
    src: url('template/001/fonts/calibri/calibrib.eot?#iefix') format('embedded-opentype'),
         url('template/001/fonts/calibri/calibrib.svg#calibrib') format('svg');
    font-weight: normal;
    font-style: normal;

}

</style>

</body>
</html>
