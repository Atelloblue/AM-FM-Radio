
const stations = [
    { name: "NPR", url: "https://npr-ice.streamguys1.com/live.mp3", band: "fm" },
    { name: "Soma FM", url: "https://ice1.somafm.com/groovesalad-128-mp3", band: "fm" },
    { name: "BBC World Service", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service", band: "am" },
    { name: "WNYC", url: "https://fm939.wnyc.org/wnycfm-web", band: "fm" },
    { name: "Classic FM", url: "https://media-ice.musicradio.com/ClassicFMMP3", band: "fm" },
    { name: "Jazz24", url: "https://live.wostreaming.net/direct/ppm-jazz24aac-ibc1", band: "fm" },
    { name: "Radio Paradise", url: "https://stream.radioparadise.com/aac-320", band: "fm" },
    { name: "Voice of America", url: "https://voa-28.akacast.akamaistream.net/7/54/322040/v1/ibb.akacast.akamaistream.net/voa-28", band: "am" },
    { name: "ABC Radio National", url: "https://live-radio01.mediahubaustralia.com/2RNW/mp3/", band: "am" },
    { name: "BBC Radio 1", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one", band: "fm" },
    { name: "BBC Radio 2", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two", band: "fm" },
    { name: "BBC Radio 3", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_three", band: "fm" },
    { name: "BBC Radio 4", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm", band: "fm" },
    { name: "BBC Radio 5 Live", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_five_live", band: "am" },
    { name: "France Inter", url: "https://icecast.radiofrance.fr/franceinter-midfi.mp3", band: "fm" },
    { name: "France Culture", url: "https://icecast.radiofrance.fr/franceculture-midfi.mp3", band: "fm" },
    { name: "Deutsche Welle", url: "https://dw.audiostream.io/dw/1012/mp3/64/dw-news", band: "am" },
    { name: "Radio Sweden", url: "https://http-live.sr.se/p1-mp3-192", band: "fm" },
    { name: "RAI Radio 1", url: "https://icestreaming.rai.it/1.mp3", band: "fm" },
    { name: "ABC Classic", url: "https://live-radio01.mediahubaustralia.com/2FMW/mp3/", band: "fm" },
    { name: "CBC Radio One", url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_TOR@118420/master.m3u8", band: "am" },
    { name: "CBC Music", url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR2_TOR@382863/master.m3u8", band: "fm" },
    { name: "Radio New Zealand", url: "https://stream-ice.radionz.co.nz/national.mp3", band: "am" },
    { name: "Triple J", url: "https://live-radio01.mediahubaustralia.com/2TJW/mp3/", band: "fm" },
    { name: "Kiss FM UK", url: "https://stream-kiss.planetradio.co.uk/kissnational.mp3", band: "fm" },
    { name: "Capital FM", url: "https://media-ice.musicradio.com/CapitalUKMP3", band: "fm" },
    { name: "Heart FM", url: "https://media-ice.musicradio.com/HeartUKMP3", band: "fm" },
    { name: "Smooth Radio", url: "https://media-ice.musicradio.com/SmoothUKMP3", band: "fm" },
    { name: "LBC UK", url: "https://media-ice.musicradio.com/LBCUKMP3", band: "am" },
    { name: "talkSPORT", url: "https://radio.talksport.com/stream", band: "am" },
    { name: "Radio Italia", url: "https://radioitaliasmi-lh.akamaihd.net/i/radioitaliasmi_1@329643/master.m3u8", band: "fm" },
    { name: "Radio 538", url: "https://21253.live.streamtheworld.com/RADIO538.mp3", band: "fm" },
    { name: "Radio 10", url: "https://21253.live.streamtheworld.com/RADIO10.mp3", band: "fm" },
    { name: "Sky Radio", url: "https://19993.live.streamtheworld.com/SKYRADIO.mp3", band: "fm" },
    { name: "RTL Radio", url: "https://streaming.radio.rtl.fr/rtl-1-44-128", band: "fm" },
    { name: "Europe 1", url: "https://stream.europe1.fr/europe1.mp3", band: "am" },
    { name: "RMC Info", url: "https://rmc.bfmtv.com/rmcinfo-mp3", band: "am" },
    { name: "Radio Nova", url: "https://novazz.ice.infomaniak.ch/novazz-128.mp3", band: "fm" },
    { name: "FIP", url: "https://icecast.radiofrance.fr/fip-midfi.mp3", band: "fm" },
    { name: "MDR Jump", url: "https://mdr-284320-0.sslcast.mdr.de/mdr/284320/0/mp3/high/stream.mp3", band: "fm" },
    { name: "Bayern 1", url: "https://dispatcher.rndfnk.com/br/br1/obb/mp3/mid", band: "fm" },
    { name: "NDR 2", url: "https://icecast.ndr.de/ndr/ndr2/hamburg/mp3/128/stream.mp3", band: "fm" },
    { name: "WDR 2", url: "https://wdr-wdr2-rheinland.icecastssl.wdr.de/wdr/wdr2/rheinland/mp3/128/stream.mp3", band: "fm" },
    { name: "Antenne Bayern", url: "https://mp3channels.webradio.antenne.de/antenne", band: "fm" },
    { name: "Radio Hamburg", url: "https://stream.radiohamburg.de/rhh-live/mp3-192/stream.mp3", band: "fm" },
    { name: "Radio Regenbogen", url: "https://streams.regenbogen.de/rr-mannheim-128-mp3", band: "fm" },
    { name: "Radio Bremen", url: "https://icecast.radiobremen.de/rb/bremen1/live/mp3/128/stream.mp3", band: "am" },
    { name: "RTL 102.5", url: "https://streamingv2.shoutcast.com/rtl-1025", band: "fm" },
    { name: "RDS", url: "https://icstream.rds.radio/rds", band: "fm" },
    { name: "Radio Deejay", url: "https://radiodeejay-lh.akamaihd.net/i/RadioDeejay_Live_1@189857/master.m3u8", band: "fm" },
    { name: "M2O", url: "https://radiom2o-lh.akamaihd.net/i/RadioM2o_Live_1@42518/master.m3u8", band: "fm" },
    { name: "Radio 105", url: "https://icecast.unitedradio.it/Radio105.mp3", band: "fm" },
    { name: "Virgin Radio Italy", url: "https://icecast.unitedradio.it/Virgin.mp3", band: "fm" },
    { name: "RMC Italia", url: "https://icecast.unitedradio.it/RMC.mp3", band: "am" },
    { name: "Radio 24", url: "https://radio24-lh.akamaihd.net/i/radio24_1@99307/master.m3u8", band: "fm" },
    { name: "Radio Capital", url: "https://radiocapital-lh.akamaihd.net/i/RadioCapital_Live_1@196312/master.m3u8", band: "fm" },
    { name: "Radio Popolare", url: "https://live.radiopopolare.it/radiopop", band: "fm" },
    { name: "Radio Radicale", url: "https://live.radioradicale.it/live.mp3", band: "am" },
    { name: "RTL 102.5", url: "https://rtl-radio1.stream24.net/rtl-live", band: "fm" },
    { name: "Radio Kiss Kiss", url: "https://ice06.fluidstream.net/KissKiss.mp3", band: "fm" },
    { name: "Radio Energy Berlin", url: "https://stream.radiogroup.de/radio-energy-berlin/aac-64/stream.mp3", band: "fm" },
    { name: "Deutschlandfunk", url: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3", band: "am" },
    { name: "Radio FFN", url: "https://stream.ffn.de/ffn/mp3-192/stream.mp3", band: "fm" },
    { name: "Radio BOB!", url: "https://streams.radiobob.de/bob-national/mp3-192/streams.radiobob.de/", band: "fm" },
    { name: "Radio Eins", url: "https://rbb-radioeins-live.sslcast.addradio.de/rbb/radioeins/live/mp3/128/stream.mp3", band: "fm" },
    { name: "SWR3", url: "https://liveradio.swr.de/sw282p3/swr3/", band: "fm" },
    { name: "HR3", url: "https://hr-hr3-live.sslcast.addradio.de/hr/hr3/live/mp3/128/stream.mp3", band: "fm" },
    { name: "Radio Rotterdam", url: "https://stream.radiorotterdam.nl/live", band: "fm" },
    { name: "Radio Veronica", url: "https://20853.live.streamtheworld.com/VERONICA.mp3", band: "fm" },
    { name: "3FM", url: "https://icecast.omroep.nl/3fm-bb-mp3", band: "fm" },
    { name: "Q-Music NL", url: "https://stream.qmusic.nl/qmusic/mp3", band: "fm" },
    { name: "Radio 1 BE", url: "https://live-radio-cf.lwc.vrtcdn.be/groupc/live/47303cf3-a205-4887-9f31-3b62cb610a5a/live.isml/.m3u8", band: "fm" },
    { name: "Studio Brussel", url: "https://live-radio-cf.lwc.vrtcdn.be/groupc/live/f404f0f3-3917-40fd-80b6-a152761072fe/live.isml/.m3u8", band: "fm" },
    { name: "Radio Contact", url: "https://radiocontact.ice.infomaniak.ch/radiocontact-mp3-128.mp3", band: "fm" },
    { name: "Bel RTL", url: "https://belrtl.ice.infomaniak.ch/belrtl-mp3-192.mp3", band: "fm" },
    { name: "RTL FM BE", url: "https://rtlbe.ice.infomaniak.ch/rtlbe-mp3-128.mp3", band: "fm" },
    { name: "NRJ Belgium", url: "https://streamingp.shoutcast.com/NRJ", band: "fm" },
    { name: "Radio Nostalgie BE", url: "https://streamingp.shoutcast.com/NostalgieWhats", band: "fm" },
    { name: "RSI Rete Uno", url: "https://lsaplus.swisstxt.ch/audio/reteuno_96.stream/playlist.m3u8", band: "fm" },
    { name: "Radio Swiss Classic", url: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128", band: "fm" },
    { name: "Radio Swiss Jazz", url: "https://stream.srg-ssr.ch/m/rsj/mp3_128", band: "fm" },
    { name: "Energy Zurich", url: "https://energyzuerich.ice.infomaniak.ch/energyzuerich-high.mp3", band: "fm" },
    { name: "RTS La Première", url: "https://stream.srg-ssr.ch/m/la-1ere/mp3_128", band: "am" },
    { name: "Radio Wien", url: "https://orf-live.ors-shoutcast.at/wie-q2a", band: "fm" },
    { name: "Ö1", url: "https://orf-live.ors-shoutcast.at/oe1-q2a", band: "am" },
    { name: "Radio Stephansdom", url: "https://stream.radiostation.at/live", band: "fm" },
    { name: "Radio 88.6", url: "https://edge60.stream.maxfive.com/max886-1", band: "fm" },
    { name: "Kronehit", url: "https://secureonair.krone.at/kronehit.mp3", band: "fm" },
    { name: "DR P1", url: "https://drliveradio.akamaized.net/hls/live/2022411/p1/masterab.m3u8", band: "am" },
    { name: "DR P3", url: "https://drliveradio.akamaized.net/hls/live/2022413/p3/masterab.m3u8", band: "fm" },
    { name: "Radio Nova DK", url: "https://live-bauerdk.sharp-stream.com/Nova_dk_mp3", band: "fm" },
    { name: "The Voice DK", url: "https://live-bauerdk.sharp-stream.com/voice_dk_mp3", band: "fm" },
    { name: "SR P1", url: "https://http-live.sr.se/p1-mp3-192", band: "am" },
    { name: "SR P3", url: "https://http-live.sr.se/p3-mp3-192", band: "fm" },
    { name: "Mix Megapol", url: "https://live-bauerse-fm.sharp-stream.com/mixmegapol_instream_se_mp3", band: "fm" },
    { name: "NRK P1", url: "https://lyd.nrk.no/nrk_radio_p1_oslo_akershus_mp3_h", band: "am" },
    { name: "NRK P3", url: "https://lyd.nrk.no/nrk_radio_p3_mp3_h", band: "fm" },
    { name: "Radio Norge", url: "https://live-bauerno.sharp-stream.com/radionorge_no_mp3", band: "fm" },
    { name: "YLE Radio 1", url: "https://yleradiolive.akamaized.net/hls/live/2027672/in-YleRadio1/master.m3u8", band: "am" },
    { name: "YLE X3M", url: "https://yleradiolive.akamaized.net/hls/live/2027678/in-YleX3M/master.m3u8", band: "fm" },
    { name: "Radio Nova FI", url: "https://stream.bauermedia.fi/radionova/radionova_64.aac", band: "fm" },
    { name: "Radio Suomi", url: "https://yleradiolive.akamaized.net/hls/live/2027675/in-YleRS/master.m3u8", band: "fm" },
    { name: "Radio Rock FI", url: "https://stream.bauermedia.fi/radiorock/radiorock_64.aac", band: "fm" },
    { name: "ERR Raadio 2", url: "https://icecast.err.ee/raadio2.mp3", band: "fm" },
    { name: "Raadio Kuku", url: "https://router.euddn.net/8103046e16b71d15d692b57c187875c7/kuku_high.mp3", band: "fm" },
    { name: "Star FM EE", url: "https://ice.leviracloud.eu/starFM96-aac", band: "fm" },
    { name: "LR1", url: "https://live.pieci.lv/live19-hq.mp3", band: "am" },
    { name: "Latvijas Radio 2", url: "https://live.pieci.lv/live13-hq.mp3", band: "fm" },
    { name: "European Hit Radio", url: "https://stream.ehrhiti.lv:8000/ehr.aac", band: "fm" },
    { name: "LRT Radijas", url: "https://radijas.lrt.lt/radijas/lrt_radijas/playlist.m3u8", band: "am" },
    { name: "M-1", url: "https://radio.m-1.fm/m1/mp3", band: "fm" },
    { name: "WABC New York", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WABCAMAAC.aac", band: "am" },
    { name: "WCBS New York", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WCBSAMAAC.aac", band: "am" },
    { name: "WFAN New York", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WFANAMAAC.aac", band: "am" },
    { name: "WOR New York", url: "https://stream.revma.ihrhls.com/zc5874", band: "am" },
    { name: "WINS New York", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WINSAMAAC.aac", band: "am" },
    { name: "WBBM Chicago", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WBBMAMAAC.aac", band: "am" },
    { name: "WGN Chicago", url: "https://stream.revma.ihrhls.com/zc7036", band: "am" },
    { name: "WLS Chicago", url: "https://stream.revma.ihrhls.com/zc7033", band: "am" },
    { name: "WCPT Chicago", url: "https://stream.revma.ihrhls.com/zc7037", band: "am" },
    { name: "KFI Los Angeles", url: "https://stream.revma.ihrhls.com/zc177", band: "am" },
    { name: "KNX Los Angeles", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KNXAMAAC.aac", band: "am" },
    { name: "KABC Los Angeles", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KABCAMAAC.aac", band: "am" },
    { name: "KDKA Pittsburgh", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KDKAAMAAC.aac", band: "am" },
    { name: "WBZ Boston", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WBZAMAAC.aac", band: "am" },
    { name: "WWJ Detroit", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WWJAMAAC.aac", band: "am" },
    { name: "KMOX St. Louis", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KMOXAMAAC.aac", band: "am" },
    { name: "WHAS Louisville", url: "https://stream.revma.ihrhls.com/zc1019", band: "am" },
    { name: "WSB Atlanta", url: "https://stream.revma.ihrhls.com/zc2825", band: "am" },
    { name: "WBAP Dallas", url: "https://stream.revma.ihrhls.com/zc3401", band: "am" },
    { name: "KTRH Houston", url: "https://stream.revma.ihrhls.com/zc4578", band: "am" },
    { name: "WPLJ New York", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WPLJFMAAC.aac", band: "fm" },
    { name: "WQXR New York", url: "https://stream.wqxr.org/wqxr-web", band: "fm" },
    { name: "WFUV New York", url: "https://onair.wfuv.org/onair-hi", band: "fm" },
    { name: "Hot 97 New York", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WQHTFMAAC.aac", band: "fm" },
    { name: "Z100 New York", url: "https://stream.revma.ihrhls.com/zc1469", band: "fm" },
    { name: "WBEZ Chicago", url: "https://stream.wbez.org/wbez-web.mp3", band: "fm" },
    { name: "WXRT Chicago", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WXRTFMAAC.aac", band: "fm" },
    { name: "B96 Chicago", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WBBMFMAAC.aac", band: "fm" },
    { name: "WGCI Chicago", url: "https://stream.revma.ihrhls.com/zc849", band: "fm" },
    { name: "KIIS Los Angeles", url: "https://stream.revma.ihrhls.com/zc185", band: "fm" },
    { name: "KCRW Los Angeles", url: "https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air", band: "fm" },
    { name: "KPCC Los Angeles", url: "https://live.amperwave.net/direct/southerncalipr-kpccfmmp3-imc", band: "fm" },
    { name: "KROQ Los Angeles", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KROQFMAAC.aac", band: "fm" },
    { name: "Power 106 LA", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KPWRFMAAC.aac", band: "fm" },
    { name: "KEXP Seattle", url: "https://kexp.streamguys1.com/kexp64.aac", band: "fm" },
    { name: "KUOW Seattle", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KUOWFM_AAC.aac", band: "fm" },
    { name: "KNDD Seattle", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KNDDFMAAC.aac", band: "fm" },
    { name: "KQED San Francisco", url: "https://streams.kqed.org/kqedradio", band: "fm" },
    { name: "KFOG San Francisco", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KFOGFMAAC.aac", band: "fm" },
    { name: "WAMU Washington DC", url: "https://hd1.wamu.org/", band: "fm" },
    { name: "WTOP Washington DC", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WTOPFMAAC.aac", band: "fm" },
    { name: "WHUR Washington DC", url: "https://whur.streamon.fm/WHUR-aac", band: "fm" },
    { name: "WETA Washington DC", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WETAFMAAC.aac", band: "fm" },
    { name: "WMMR Philadelphia", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WMMRFMAAC.aac", band: "fm" },
    { name: "WXPN Philadelphia", url: "https://wxpnhi.xpn.org/xpnhi", band: "fm" },
    { name: "WBOS Boston", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WBOSFMAAC.aac", band: "fm" },
    { name: "WGBH Boston", url: "https://streams.audio.wgbh.org/wgbh", band: "fm" },
    { name: "WBUR Boston", url: "https://audio.wbur.org/stream/live_mp3.php", band: "fm" },
    { name: "The River Boston", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WXRVFMAAC.aac", band: "fm" },
    { name: "WERS Boston", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WERSFMAAC.aac", band: "fm" },
    { name: "WXKS Boston", url: "https://stream.revma.ihrhls.com/zc1097", band: "fm" },
    { name: "MPR News", url: "https://nis.stream.publicradio.org/nis.mp3", band: "fm" },
    { name: "The Current", url: "https://current.stream.publicradio.org/current.mp3", band: "fm" },
    { name: "Classical MPR", url: "https://cms.stream.publicradio.org/cms.mp3", band: "fm" },
    { name: "KNOW Minneapolis", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KNOWFMAAC.aac", band: "fm" },
    { name: "WCCO Minneapolis", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WCCOAMAAC.aac", band: "am" },
    { name: "KQRS Minneapolis", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KQRSFMAAC.aac", band: "fm" },
    { name: "Cities 97.1", url: "https://stream.revma.ihrhls.com/zc1209", band: "fm" },
    { name: "KTCZ Minneapolis", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KTCZFMAAC.aac", band: "fm" },
    { name: "KBCO Denver", url: "https://stream.revma.ihrhls.com/zc2804", band: "fm" },
    { name: "KBPI Denver", url: "https://stream.revma.ihrhls.com/zc377", band: "fm" },
    { name: "CPR News", url: "https://stream1.cprnetwork.org/cpr1_aac", band: "fm" },
    { name: "CPR Classical", url: "https://stream1.cprnetwork.org/cpr2_aac", band: "fm" },
    { name: "KUVO Denver", url: "https://kuvo-ice.streamguys1.com/kuvo-aac-64", band: "fm" },
    { name: "KCFR Denver", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KCFRFMAAC.aac", band: "fm" },
    { name: "KOA Denver", url: "https://stream.revma.ihrhls.com/zc373", band: "am" },
    { name: "WABE Atlanta", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WABEFMAAC.aac", band: "fm" },
    { name: "WCLK Atlanta", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WCLKFMAAC.aac", band: "fm" },
    { name: "V-103 Atlanta", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WVEEFMAAC.aac", band: "fm" },
    { name: "Star 94 Atlanta", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WSTRFMAAC.aac", band: "fm" },
    { name: "WRAS Atlanta", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WRASFMAAC.aac", band: "fm" },
    { name: "WUOG Athens", url: "https://streaming.wuog.org:8443/stream", band: "fm" },
    { name: "WREK Atlanta", url: "https://streaming.wrek.org/main/128kb.mp3", band: "fm" },
    { name: "WDBO Orlando", url: "https://stream.revma.ihrhls.com/zc6954", band: "fm" },
    { name: "WMFE Orlando", url: "https://wmfe.streamguys1.com/wmfe", band: "fm" },
    { name: "WJRR Orlando", url: "https://stream.revma.ihrhls.com/zc5252", band: "fm" },
    { name: "WWKA Orlando", url: "https://stream.revma.ihrhls.com/zc5254", band: "fm" },
    { name: "WUCF Orlando", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WUCFFMAAC.aac", band: "fm" },
    { name: "WLRN Miami", url: "https://stream.wlrn.org/", band: "fm" },
    { name: "WDNA Miami", url: "https://stream.wdna.org/", band: "fm" },
    { name: "WQAM Miami", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WQAMAMAAC.aac", band: "am" },
    { name: "WAXY Miami", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WAXYAMAAC.aac", band: "am" },
    { name: "WKIS Miami", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WKISFMAAC.aac", band: "fm" },
    { name: "KERA Dallas", url: "https://kera-ice.streamguys1.com/keralive64aac", band: "fm" },
    { name: "KNON Dallas", url: "https://vobook.ru/64.78.234.165:8000/KNON", band: "fm" },
    { name: "KDGE Dallas", url: "https://stream.revma.ihrhls.com/zc3403", band: "fm" },
    { name: "KEGL Dallas", url: "https://stream.revma.ihrhls.com/zc3379", band: "fm" },
    { name: "KLTY Dallas", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KLTYFMAAC.aac", band: "fm" },
    { name: "KUHF Houston", url: "https://stream.houstonpublicmedia.org/news-mp3", band: "fm" },
    { name: "KPFT Houston", url: "https://stream.pacifica.org:8000/kpft_64", band: "fm" },
    { name: "KRBE Houston", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KRBEFMAAC.aac", band: "fm" },
    { name: "KHMX Houston", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KHMXFMAAC.aac", band: "fm" },
    { name: "KTBZ Houston", url: "https://stream.revma.ihrhls.com/zc37", band: "fm" },
    { name: "KUT Austin", url: "https://kut.streamguys1.com/kut-web", band: "fm" },
    { name: "KUTX Austin", url: "https://kut.streamguys1.com/kutx-web", band: "fm" },
    { name: "KGSR Austin", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KGSRFMAAC.aac", band: "fm" },
    { name: "KLBJ Austin", url: "https://stream.revma.ihrhls.com/zc41", band: "fm" },
    { name: "KROX Austin", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KROXFMAAC.aac", band: "fm" },
    { name: "KONO San Antonio", url: "https://stream.revma.ihrhls.com/zc593", band: "fm" },
    { name: "KISS San Antonio", url: "https://stream.revma.ihrhls.com/zc597", band: "fm" },
    { name: "KSTX San Antonio", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KSTXFMAAC.aac", band: "fm" },
    { name: "WOAI San Antonio", url: "https://stream.revma.ihrhls.com/zc585", band: "am" },
    { name: "KKYX San Antonio", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KKYXAMAAC.aac", band: "am" }
];

function searchStations() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const selectedBand = document.querySelector('input[name="band"]:checked').value;

    const filteredStations = stations.filter(station =>
        station.name.toLowerCase().includes(searchInput) &&
        station.band === selectedBand
    );

    displayStations(filteredStations);
}

function displayStations(stations) {
    const stationsList = document.getElementById('stations-list');
    stationsList.innerHTML = '';

    if (stations.length === 0) {
        stationsList.innerHTML = "<p>No stations found.</p>";
        return;
    }

    stations.forEach(station => {
        const stationElement = document.createElement('div');
        stationElement.classList.add('station');

        const stationName = document.createElement('p');
        stationName.textContent = station.name;

        const playButton = document.createElement('button');
        playButton.textContent = 'Play';
        playButton.onclick = () => playStation(station.url);

        stationElement.appendChild(stationName);
        stationElement.appendChild(playButton);
        stationsList.appendChild(stationElement);
    });
}

function playStation(url) {
    const radioPlayer = document.getElementById('radio-player');
    const radioSource = document.getElementById('radio-source');
    
    radioSource.src = url;
    radioPlayer.load();
    radioPlayer.play()
        .catch(error => {
            console.error("Error playing station:", error);
            alert("Unable to play this station. Please try another one.");
        });
}

// Initialize the display
window.addEventListener('DOMContentLoaded', () => {
    const defaultBand = 'am';
    document.querySelector(`input[value="${defaultBand}"]`).checked = true;
    searchStations();
});
