const conciertos = [{"id":"concierto 1","titulo":"dua lipa","descr":"dua lipa estará por primera vez en solitario en nuestro recinto, presentando su nuevo álbum future nostalgia. un tour en el que la superestrella mundial ha querido potenciar la fuerza del directo y mezclar la producción con la electrónica moderna.entradas a la venta a partir del 5 de diciembre. parte del dinero recaudado en la venta de entradas se destinará a unicef y sunny hill foundation.","tipo_musica":"pop","precio":"41-64","fecha":"03/06/2022","lugar":"madrid (wizink center)","horario":"21:00h","edad_min":"12+","plazas":15,"img":"data:image/jpeg;base64,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"},{"id":"concierto 2","titulo":"queen","descr":"queen + adam lambert  vuelve a españa en su gira the rapshody tour con un concierto exclusivo en barcelona.","tipo_musica":"rock","precio":"56-145","fecha":"16/06/2022","lugar":"barcelona","horario":"22:00h","edad_min":"tp","plazas":10,"img":"https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2022/01/queen-tour-1023x620.jpg"},{"id":"concierto 3","titulo":"ther rolling stones","descr":"¡the rolling stones en concierto! en su gira por europa llamada sixty stones europe 2022, vendrán este año a madrid exclsuviamente. no te los pierdas!","tipo_musica":"rock","precio":"160-270","fecha":"01/06/2022 y 02/06/2022","lugar":"madrid (wanda metropolitano)","horario":"21:00h","edad_min":"16+","plazas":10,"img":"https://i.ytimg.com/vi/TA6xPtxPC7A/maxresdefault.jpg"},{"id":"concierto 4","titulo":"daddy yankee","descr":"no te pierdas la última gira de daddy yankee. el cantante de música urbana daddy yankee dirá adiós a sus fans españoles con dos últimos conciertos en los festivales madrid puro reggaeton y puro latino fest torremolinos, que reunirán a estrellas del género en la caja mágica madrileña y en el recinto ferial de la localidad malagueña los días 15 y 16 de julio de 2022.","tipo_musica":"latino","precio":"100-181","fecha":"15/06/2022 y 16/07/2022","lugar":"ferial de torremolinos (málaga) y madrid (caja mágica)","horario":"22:30h","edad_min":"16+","plazas":8,"img":""},{"id":"concierto 5","titulo":"alicia keys","descr":"la próxima gira mundial de la estrella estadounidense de la música soul alicia keys recalará en madrid tras haber pasado once años desde su última visita a españa. el concierto tendrá lugar el 4 de julio de 2022 en el wizink center donde presentará su séptimo álbum de estudio, a.l.i.c.i.a., que incluye temas como time machine, show me love y underdog.","tipo_musica":"r b","precio":"62-124","fecha":"4 de julio","lugar":"madrid (wizink center)","horario":"21:00h","edad_min":"tp","plazas":15,"img":""},{"id":"concierto 6","titulo":"violadores del verso","descr":"violadores del verso, uno de los grupos de rap más punteros del panorama español, actuarán por partida doble en la sala assaig de palma los días 27 y 28 de agosto.los maños se han reivindicando con cada trabajo de su discografía como una de las máximas fuerzas del rap español en la historia desde que comenzaran su trayectoria en 1998. la actuación en palma se concierta tras el anuncio del pasado mes de abrl en el que los componentes del grupo decidieron tomarse un descanso para realizar trabajos en solitario tras una gira de conciertos. esta puede ser una oportunidad única para presenciar en directo los ritmos y rimas de kase-o, lirico, hate y r de rumba, que prometen llenar la sala assaig de amantes del rap que disfrutarán con lo mejor de su repertorio.","tipo_musica":"hip-hop/r b","precio":"16-20","fecha":"27/08/22 y 28/08/2022","lugar":"mallorca (es gremi)","horario":"22:00h","edad_min":"16+","plazas":9,"img":""},{"id":"concierto 7","titulo":"romeo santos","descr":"el poeta puertoriqueño vuelve a españa en un único concierto en gijón.","tipo_musica":"latino","precio":"80-150","fecha":"3 de agosto","lugar":"gijón (asturias)","horario":"20:00h","edad_min":"12+","plazas":500,"img":""},{"id":"concierto 8","titulo":"david guetta","descr":"hï ibiza da la bienvenida a future rave de david guetta y morten para una residencia exclusiva de 18 semanas. el dj número 1 oficialmente reconocido en el mundo y su compañero de batallas en future rave presentarán esta explosiva experiencia musical.","tipo_musica":"electronica","precio":"7 0","fecha":"17 de junio","lugar":"ibiza","horario":"00:00h","edad_min":"18+","plazas":3,"img":""},{"id":"concierto 9","titulo":"justice","descr":"por primera vez, el grupo de música electrónica/dance tocará en españa en un único concierto en santiago de compostela","tipo_musica":"dance","precio":25,"fecha":"28/09/2022","lugar":"santiago de compostela","horario":"18:30h","edad_min":"tp","plazas":5,"img":""},{"id":"concierto 10","titulo":"ludovico einaudi","descr":"tras el éxito de bandas sonoras como nomadland y the father, el ilustre compositor y pianista ludovico einaudi regresa con underwater, su primer álbum solo para piano en 20 años. underwater nació en el confinamiento del 2020, cuando el reconocido compositor aprovechó la oportunidad para escribir canciones en la más pura intimidad: solo einaudi y su piano.","tipo_musica":"clasica","precio":"40-95","fecha":"28/10/2022","lugar":"granada","horario":"20:00h","edad_min":"tp","plazas":7,"img":""},{"id":"concierto 11","titulo":"rammstein","descr":"el veterano de grupo metal llega a españa con más popularidad que nunca.","tipo_musica":"metal","precio":"52-142","fecha":"15/11/2022","lugar":"valencia","horario":"22:00h","edad_min":"18+","plazas":8,"img":""},{"id":"concierto 12","titulo":"metallica","descr":"los metaleros de todo el mundo saben que nada es comparable con la intensa intensidad de ver a metallica desgarrar con sus monumentales epopeyas sonoras como enter sandman, for whom the bell tolls y master of puppets en concierto. sus fans ya sacuden la cabeza con sus innumerables clásicos mientras el líder james hetfield se desgañita a través de las canciones más duras de la banda y las baladas más brutales. la guitarra enfermiza de kirk hammett y los furiosos redobles de batería de lars ulrich completan el asalto sónico, sorprendiendo a los oyentes con cada ruptura contundente y riff palpitante. todavía ofreciendo el mismo salvajismo brillante que los convirtió en superestrellas del thrash metal en primer lugar, metallica continúa desatando el caos del metal cada vez que están de gira.","tipo_musica":"hard metal","precio":"90-142","fecha":"03/09/2022","lugar":"bilbao","horario":"16:00h","edad_min":"12+","plazas":10,"img":""},{"id":"concierto 13","titulo":"david bowie","descr":"tributo al legendario david bowie tras 6 años de su muerte.","tipo_musica":"rock","precio":145,"fecha":"02/09/2022","lugar":"mijas (málaga)","horario":"18:00h","edad_min":"tp","plazas":6,"img":""},{"id":"concierto 14","titulo":"radiohead","descr":"después de 9 años, vuelve este gurpo de rock alternativo a españa en dos conciertos, uno en castellón y otro en murcia","tipo_musica":"alternativo","precio":"55-120","fecha":"03/12/2022","lugar":"murcia","horario":"21:00h","edad_min":"tp","plazas":6,"img":""},{"id":"concierto 15","titulo":"kamasi washington","descr":"en su gira del disco the epic, el aclamado saxofonista kamasi washington nos regala su presencia en un único concierto en españa.","tipo_musica":"jazz","precio":"60-95","fecha":"06/05/2022","lugar":"Cádiz","horario":"20:00h","edad_min":"tp","plazas":4,"img":""},{"id":"concierto 16","titulo":"eric clapton","descr":"el legendario eric clapton regresa a españa en una de las últimas giras que dará antes de su retirada.","tipo_musica":"blues","precio":"45-120","fecha":"18/08/2022","lugar":"toledo","horario":"19:00h","edad_min":"tp","plazas":3,"img":""},{"id":"concierto 17","titulo":"fito fitipaldis","descr":"fito & fitipaldis ya está de nuevo en la carretera con cada vez cadáver tour. la banda vuelve a los escenarios con más fuerza que nunca. la gira pasará únicamente por 21 ciudades.","tipo_musica":"rock","precio":"38-50","fecha":"02/07/2022","lugar":"madrid (wizink center)","horario":"20:00h","edad_min":"tp","plazas":15,"img":""},{"id":"concierto 18","titulo":"dani martín","descr":"tras recorrer españa y américa con su exitosa gira ‘grandes éxitos y pequeños desastres’ en 2018, donde congregó a más de 400.000 espectadores, dani martín regresa a los escenarios con su nueva gira en 2022.","tipo_musica":"pop","precio":41,"fecha":"17/09/2022","lugar":"valladolid","horario":"22:00h","edad_min":"tp","plazas":5,"img":""},{"id":"concierto 19","titulo":"bad bunny","descr":"bad bunny, ha lanzado las fechas de los conciertos para su nueva gira de conciertos en 2022 que lleva por nombreel último tour del mundo.","tipo_musica":"latino","precio":"60-140","fecha":"20/07/22","lugar":"pamplona","horario":"22:00h","edad_min":"12+","plazas":8,"img":""},{"id":"concierto 20","titulo":"twenty one pilots","descr":"después de 5 años, twenty one pilots vuelve a españa en la gira de su último disco scaled and icy","tipo_musica":"indie","precio":"56-135","fecha":"12/09/2022","lugar":"valenciia","horario":"21:00h","edad_min":"16+","plazas":12,"img":""},{"id":"concierto 21","titulo":"the score","descr":"debido a su participación en el festival internacional festival sound, the score aprovechará para dar un concieto en cádiz","tipo_musica":"indie","precio":25,"fecha":"13/06/2022","lugar":"cádiz","horario":"20:00h","edad_min":"12+","plazas":4,"img":""},{"id":"concierto 22","titulo":"alan walker","descr":"por primera vez, alan walker estará en españa. ¡no te lo pierdas!","tipo_musica":"electronica","precio":"125-150","fecha":"02/08/2022","lugar":"madrid","horario":"17:00h","edad_min":"16+","plazas":17,"img":""},{"id":"concierto 23","titulo":"imagine dragons","descr":"en su gira mercury world tour, pasarán por las dos ciudades más importantes para representar su nuevo álbum.","tipo_musica":"pop","precio":77,"fecha":"28/07/2022","lugar":"barcelona","horario":"22:00h","edad_min":"tp","plazas":13,"img":""},{"id":"concierto 24","titulo":"the weekend","descr":"the weeknd anuncia su regreso a los escenarios con la gira mundial after hours","tipo_musica":"r b","precio":"45-110","fecha":"24/10/2022","lugar":"madrid (wizink center)","horario":"22:00h","edad_min":"18+","plazas":15,"img":""},{"id":"concierto 25","titulo":"stromae","descr":"representando su último disco multitude, stromae viene a españa en un único concierto","tipo_musica":"electronica","precio":"38-85","fecha":"11/09/2022","lugar":"bilbao","horario":"20:00h","edad_min":"tp","plazas":10,"img":""},{"id":"concierto 26","titulo":"sebastian yatra","descr":"sebastián yatra es un intérprete y compositor colombiano de balada, pop latino y reguetón. se caracteriza por sus canciones románticas, juntando el lirismo tradicional con las influencias del reguetón del momento.","tipo_musica":"latino","precio":40,"fecha":"18/06/2022","lugar":"bilbao","horario":"21:00","edad_min":16,"plazas":120,"img":""},{"id":"concierto 27","titulo":"mr. kilombo","descr":"mr. kilombo planea continuar girando en este recién estrenado dos mil veintidós.","tipo_musica":"latino","precio":30,"fecha":"06/05/2022","lugar":"bilbao","horario":"21:00","edad_min":16,"plazas":200,"img":""},{"id":"concierto 28","titulo":"doja cat","descr":"planet her el álbum más reciente de doja cat en vivo.","tipo_musica":"hip-hop","precio":"50-120","fecha":"27/08/2022","lugar":"valencia","horario":"22:00","edad_min":18,"plazas":10,"img":""},{"id":"concierto 29","titulo":"blackpink","descr":"vuelven rose, jennie, lisa y jisoo con el world tour in your area en barcelona.","tipo_musica":"pop","precio":"30-150","fecha":"14/06/2022","lugar":"barcelona","horario":"20:00","edad_min":13,"plazas":9,"img":""},{"id":"concierto 30","titulo":"twice","descr":"las 9 artistas vienen a españa con su último álbum formula of love.","tipo_musica":"pop","precio":"20-85","fecha":"02/02/2023","lugar":"sevilla","horario":"21:00","edad_min":12,"plazas":9,"img":""},{"id":"concierto 31","titulo":"pinkpantheress","descr":"tras su reciente debut viene pinkpantheress a españa.","tipo_musica":"indie","precio":"20-40","fecha":"19/01/2023","lugar":"la rioja","horario":"21:00","edad_min":14,"plazas":4,"img":""},{"id":"concierto 32","titulo":"willow smith","descr":"por primera vez willow en vivo en madrid.","tipo_musica":"indie","precio":"30-80","fecha":"11//09/2023","lugar":"madrid","horario":"20:00","edad_min":14,"plazas":7,"img":""},{"id":"concierto 33","titulo":"babymetal","descr":"tras cancelas su primer concierto en españa en 2020, vuelven este año.","tipo_musica":"metal","precio":"25-100","fecha":"27/09/2022","lugar":"madrid","horario":"19:00","edad_min":16,"plazas":8,"img":""},{"id":"concierto 34","titulo":"jack stauber","descr":"debuta en españa el famoso cantante jack stauber con su primer álbum.","tipo_musica":"pop","precio":"20-45","fecha":"21/07/2022","lugar":"valencia","horario":"19:00","edad_min":13,"plazas":5,"img":""},{"id":"concierto 35","titulo":"kali uchis","descr":"tras su éxito el año pasado viene por primera vez kali uchis para sorprendernos.","tipo_musica":"r b","precio":"20-80","fecha":"19/10/2023","lugar":"sevilla","horario":"17:00","edad_min":16,"plazas":5,"img":""},{"id":"concierto 36","titulo":"karol g","descr":"llega este verano karol g con su último álbum.","tipo_musica":"latino","precio":"30-90","fecha":"21/7/2022","lugar":"alicante","horario":"21:00","edad_min":18,"plazas":10,"img":""},{"id":"concierto 37","titulo":"korn","descr":"se presentan en el festival hellfest de este año!","tipo_musica":"hard rock","precio":"30-100","fecha":"12/08/2022","lugar":"malaga","horario":"21:00","edad_min":17,"plazas":8,"img":""},{"id":"concierto 38","titulo":"tyler bryant the shakedown","descr":"continuan su gira esta vez en españa!","tipo_musica":"rock","precio":"25-80","fecha":"02/03/2023","lugar":"barcelona","horario":"17:00","edad_min":16,"plazas":7,"img":""},{"id":"concierto 39","titulo":"die antwoord","descr":"die antwoord nunca antes tan cerca de ti.","tipo_musica":"dance","precio":"20-95","fecha":"28/03/2023","lugar":"valencia","horario":"22:00","edad_min":18,"plazas":6,"img":""},{"id":"concierto 40","titulo":"marshmello","descr":"prepárate para la música de marshmello a todo volumen.","tipo_musica":"electronica","precio":"50-150","fecha":"13/05/2023","lugar":"toledo","horario":"22:00","edad_min":14,"plazas":15,"img":""},{"id":"concierto 41","titulo":"zucchero","descr":"siente la magia de la música en vivo y en direct de zucchero.","tipo_musica":"clasica","precio":"20-75","fecha":"18/02/2023","lugar":"barcelona","horario":"21:00","edad_min":14,"plazas":7,"img":""},{"id":"concierto 42","titulo":"nine inch nails","descr":"el grupo de rock alternativo nos sorprende con una gira en españa.","tipo_musica":"alternativo","precio":"30-85","fecha":"05/04/2023","lugar":"ciudad real","horario":"22:00","edad_min":18,"plazas":7,"img":""},{"id":"concierto 43","titulo":"big bad vodoo daddy","descr":"la famosa banda de jazz viene por primera vez a valencia.","tipo_musica":"jazz","precio":"20-65","fecha":"11/11/2022","lugar":"valencia","horario":"21:00","edad_min":16,"plazas":5,"img":""},{"id":"concierto 44","titulo":"joe bonamassa","descr":"una leyenda del blues viene a alicante con sus mejores canciones.","tipo_musica":"blues","precio":"30-140","fecha":"07/05/2023","lugar":"alicante","horario":"19:00","edad_min":14,"plazas":8,"img":""},{"id":"concierto 45","titulo":"stray kids","descr":"las stays se preparan para la llegada de stray kids en españa.","tipo_musica":"pop","precio":"20-85","fecha":"16/01/2023","lugar":"ibiza","horario":"20:00","edad_min":14,"plazas":10,"img":""},{"id":"concierto 46","titulo":"paloma mami","descr":"vuelve con su álbum sueños de dalí.","tipo_musica":"latino","precio":"30-75","fecha":"10/07/2023","lugar":"segovia","horario":"21:00","edad_min":17,"plazas":7,"img":""},{"id":"concierto 47","titulo":"mitski","descr":"viene por primera vez la famosa cantante japonesa mitski.","tipo_musica":"alternativo","precio":"20-95","fecha":"09/12/2022","lugar":"valladolid","horario":"19:00","edad_min":16,"plazas":6,"img":""},{"id":"concierto 48","titulo":"ali","descr":"la banda japonesa llega a españa.","tipo_musica":"hip-hop","precio":"20-75","fecha":"10/10/2022","lugar":"la rioja","horario":"21:00","edad_min":14,"plazas":6,"img":""},{"id":"concierto 49","titulo":"marilyn manson","descr":"las mejores canciones del famoso metalero en vivo.","tipo_musica":"metal","precio":"20-60","fecha":"30/07/2022","lugar":"madrid","horario":"18:00","edad_min":18,"plazas":10,"img":""},{"id":"concierto 50","titulo":"gineger root","descr":"ginger root celebran sus 5 años en españa.","tipo_musica":"alternativo","precio":"20-55","fecha":"23/01/2023","lugar":"ciudad real","horario":"17:00","edad_min":14,"plazas":5,"img":""},{"id":"concierto 51","titulo":"the real tuesday weld","descr":"la clásica banda británica en vivo con sus mejores canciones.","tipo_musica":"indie","precio":"20-80","fecha":"29/06/2023","lugar":"badajoz","horario":"17:00","edad_min":16,"plazas":5,"img":""},{"id":"concierto 52","titulo":"duffy","descr":"tras dos años sin dar conciertos vuelve para dar lo mejor de ella!","tipo_musica":"pop","precio":"40-95","fecha":"25/09/2022","lugar":"burgos","horario":"20:00","edad_min":14,"plazas":10,"img":""},{"id":"concierto 53","titulo":"maneskin","descr":"adquiere tu entrada ya.","tipo_musica":"alternativo","precio":"45-95","fecha":"09/11/2022","lugar":"madrid","horario":"17:00","edad_min":14,"plazas":10,"img":""},{"id":"concierto 54","titulo":"tyler the creator","descr":"tyler, the creator se une al primavera sound este verano en barcelona","tipo_musica":"hip-hop/ rb","precio":"250-500","fecha":"02/06/2022","lugar":"barcelona","horario":"13:00","edad_min":16,"plazas":25,"img":""},{"id":"concierto 55","titulo":"daft punk","descr":"daft punk vuelve a actuar en vivo tras 15 años de su último concierto","tipo_musica":"dance/electronica","precio":"80-145","fecha":"12/09/2022","lugar":"paris","horario":"20:00","edad_min":16,"plazas":15,"img":""},{"id":"concierto 56","titulo":"kendrick lamar","descr":"kendrick presenta su nuevo album mr.morale en exclusiva en barcelona","tipo_musica":"hip-hop/r b","precio":"50-115","fecha":"27-01-2023","lugar":"málaga","horario":"21:00","edad_min":16,"plazas":5,"img":""},{"id":"concierto 57","titulo":"thundercat","descr":"el bajista y productor más reconocido de la última década en vivo","tipo_musica":"hip-hip/r b","precio":"45-105","fecha":"13-02-2023","lugar":"madrid","horario":"15:00","edad_min":16,"plazas":5,"img":""},{"id":"concierto 58","titulo":"artic monkeys","descr":"tras su separación, vuelven en vivo con un gira en 2023","tipo_musica":"pop/rock/indie/alternativo","precio":"45-120","fecha":"04-07-2023","lugar":"valencia","horario":"17:00","edad_min":16,"plazas":10,"img":""},{"id":"concierto 59","titulo":"sewerslvt","descr":"uno de los productores más misteriosos y importantes dentro del género hace su primer show en vivo","tipo_musica":"dance/electronica","precio":"30-80","fecha":"07-10-2022","lugar":"barcelona","horario":"20:30","edad_min":16,"plazas":2,"img":""},{"id":"concierto 60","titulo":"fugees","descr":"el trío más influyente de la decada de los 90's en vivo","tipo_musica":"hip-hop/r b","precio":"50-115","fecha":"12-09-2023","lugar":"toledo","horario":"18:00","edad_min":16,"plazas":10,"img":""},{"id":"concierto 61","titulo":"gesu no kiwame otome","descr":"por primera vez en españa, dando una gira por toda europa","tipo_musica":"pop/rock","precio":"35-80","fecha":"07-12-2022","lugar":"sevilla","horario":"15:30","edad_min":16,"plazas":3,"img":""},{"id":"concierto 62","titulo":"indigo la end","descr":"tras su éxito en japón recorren el mundo entero dando una gira mundial.","tipo_musica":"pop/rock","precio":"50-110","fecha":"31-12-2022","lugar":"barcelona","horario":"14:00","edad_min":16,"plazas":2.5,"img":""},{"id":"concierto 63","titulo":"jorja smith","descr":"jorja smith también formará parte del festival primavera sound este verano","tipo_musica":"hip-hop/r b","precio":"250-500","fecha":"02/06/2022","lugar":"barcelona","horario":"19:00","edad_min":16,"plazas":25,"img":""},{"id":"concierto 64","titulo":"odd future","descr":"el colectivo formado por unos de los artistas más grandes de la escen hip hop está de vuelta","tipo_musica":"hip-hop/r b","precio":"45-105","fecha":"19-05-2023","lugar":"la rioja","horario":"14:30","edad_min":16,"plazas":5,"img":""},{"id":"concierto 65","titulo":"dr. dre","descr":"dr. dre vuelve a europa con su nuevo tour","tipo_musica":"hip-hopr b","precio":"30-85","fecha":"24-08-2023","lugar":"salamanca","horario":"20:00","edad_min":16,"plazas":10,"img":""},{"id":"concierto 66","titulo":"gorillaz","descr":"gorillaz se incorpora a última hora al festival primavera sound este verano","tipo_musica":"pop/rock/indie/alternativo","precio":"250-500","fecha":"03-11-2022","lugar":"barcelona","horario":"13:00","edad_min":16,"plazas":25,"img":""},{"id":"concierto 67","titulo":"nirvana","descr":"kurt cobain revive para darnos un concierto en exclusiva","tipo_musica":"hard rock/metal/pop/rock","precio":"100-225","fecha":"25-05-2023","lugar":"madrid","horario":"21:30","edad_min":16,"plazas":10,"img":""},{"id":"concierto 68","titulo":"uyama hiramoto","descr":"uno de los artistas más icónicos y más sampleados del jazz en directo","tipo_musica":"jazz/soul","precio":"25-55","fecha":"03-02-2023","lugar":"sevilla","horario":"17:30","edad_min":16,"plazas":2,"img":""},{"id":"concierto 69","titulo":"lamp","descr":"la banda japonesa celebra sus dos décadas con una gira por europa","tipo_musica":"indie/alternativo/jazz/soul","precio":"30-75","fecha":"23-12-2022","lugar":"málaga","horario":"14:00:00","edad_min":16,"plazas":2.5,"img":""},{"id":"concierto 70","titulo":"nujabes","descr":"el gran productor nujabes está más vivo que nunca.","tipo_musica":"hip-hop/r b/jazz/soul","precio":"40-90","fecha":"09-11-2023","lugar":"Barcelona","horario":"13:30","edad_min":16,"plazas":3,"img":""},{"id":"concierto 71","titulo":"jimi hendrix","descr":"jimi resucita para darnos un gran directo.","tipo_musica":"pop/rock/hard rock/r b","precio":"50-105","fecha":"19-03-2023","lugar":"sevilla","horario":"17:00","edad_min":16,"plazas":15,"img":""},{"id":"concierto 72","titulo":"rosalia","descr":"rosalía presenta su disco motomami","tipo_musica":"latino","precio":"40-80","fecha":"03/07/2022","lugar":"valencia","horario":"13:00","edad_min":16,"plazas":10,"img":""},{"id":"concierto 73","titulo":"a tribe called quest","descr":"el aclamado cuarteto de hip hop está de vuelta en españa como tributo a su fallecido miembro","tipo_musica":"hip-hop/r b","precio":"50-135","fecha":"17-12-2022","lugar":"la rioja","horario":"15:30","edad_min":16,"plazas":8.5,"img":""},{"id":"concierto 74","titulo":"nas","descr":"revive el hip hop de los 90 con este concierto de nas","tipo_musica":"hip-hop/r b","precio":"35-70","fecha":"13-12-2022","lugar":"salamanca","horario":"18:00","edad_min":16,"plazas":4,"img":""},{"id":"concierto 75","titulo":"dabakle","descr":"el festival astudillo rock regresa a tope de energía los días 10 y 11 de junio de 2022, como siempre, en localidad palentina de astudillo, después de dos años de parón obligado por la pandemia.","tipo_musica":"metal/hard rock","precio":20,"fecha":"10/06/2022","lugar":"astudillo","horario":"21:00","edad_min":16,"plazas":1000,"img":""},{"id":"concierto 76","titulo":"angelus apatrida","descr":"los titanes del thrash metal nacional angelus apatridason las bandas confirmadas para el heavy metal heart festival 2022.","tipo_musica":"metal/hard rock","precio":20,"fecha":"11/06/2022","lugar":"mislata","horario":"21:00","edad_min":16,"plazas":300,"img":""},{"id":"concierto 77","titulo":"boikot","descr":"el xv aniversario del festival marearock, que no pudo celebrarse en 2020 ni tampoco en 2021, tendrá lugar finalmente el sábado 11 de junio de 2022 en el recinto ferial de crevillent (alicante).","tipo_musica":"metal/hard rock","precio":15,"fecha":"11/06/2022","lugar":"alicante","horario":"21:00","edad_min":16,"plazas":2500,"img":""},{"id":"concierto 78","titulo":"karne cruda","descr":"beltane fest vuelve a la normalidad y abandona el formato de ciclo de conciertos que adoptó el año pasado por la pandemia.","tipo_musica":"metal/hard rock","precio":30,"fecha":"11/06/2022","lugar":"madrid","horario":"22:00","edad_min":16,"plazas":800,"img":""},{"id":"concierto 79","titulo":"the offspring","descr":"en 2022 el azkena tiene mucho que celebrar. por un lado el regreso del festival después de dos años de parón por culpa del coronavirus, y por otro el xx aniversario de un evento que es todo un referente en la escena rockera de nuestro país.","tipo_musica":"metal/hard rock","precio":35,"fecha":"16/06/2022","lugar":"vitoria-gasteiz","horario":"21:00","edad_min":16,"plazas":150,"img":""},{"id":"concierto 80","titulo":"manolo garcia","descr":"manolo garcía vuelve a los escenarios con un nuevo trabajo de estudio que presentará en grandes recintos en una extensa gira en 2022.","tipo_musica":"pop/rock","precio":27.5,"fecha":"20/12/2022","lugar":"madrid","horario":"21:30","edad_min":18,"plazas":560,"img":""},{"id":"concierto 81","titulo":"the cure","descr":"adquiere entradas para el concierto de the cure, que tendrá lugar el próximo 10 de noviembre de 2022 en el palau sant jordi de barcelona","tipo_musica":"pop/rock","precio":52.5,"fecha":"10/11/2022","lugar":"barcelona","horario":"21:00","edad_min":16,"plazas":320,"img":""},{"id":"concierto 82","titulo":"jethro tull","descr":"ian anderson y la banda jethro tull han anunciado que volverán a la carretera con the prog years tour.","tipo_musica":"pop/rock","precio":50,"fecha":"09/06/2022","lugar":"Sevilla","horario":"21:00","edad_min":16,"plazas":1200,"img":""},{"id":"concierto 83","titulo":"alice cooper","descr":"el maestro alice cooper actuará el próximo mes de julio en madrid de la mano de live nation.","tipo_musica":"pop/rock","precio":60,"fecha":"02/07/2022","lugar":"granada","horario":"22:00","edad_min":18,"plazas":500,"img":""},{"id":"concierto 84","titulo":"iron maiden","descr":"iron maiden en vivo en barcelona","tipo_musica":"metal/hard rock","precio":90,"fecha":"29/07/2022","lugar":"valencia","horario":"21:30","edad_min":18,"plazas":780,"img":""},{"id":"concierto 85","titulo":"agresiva","descr":"los madrileños agresiva anuncian su próximo concierto en madrid.","tipo_musica":"metal/hard rock","precio":40,"fecha":"11/06/2022","lugar":"vigo","horario":"22:00","edad_min":18,"plazas":900,"img":""},{"id":"concierto 86","titulo":"kiss","descr":"los kiss en vivo en madrid","tipo_musica":"pop/rock","precio":50,"fecha":"03/07/2022","lugar":"cadiz","horario":"22:00","edad_min":18,"plazas":700,"img":""},{"id":"concierto 87","titulo":"praying mantis","descr":"banda historica en vivo en barcelona","tipo_musica":"metal/hard rock","precio":40,"fecha":"28/05/2022","lugar":"huelva","horario":"22:00","edad_min":18,"plazas":450,"img":""},{"id":"concierto 88","titulo":"legion","descr":"legion en vivo en barcelona","tipo_musica":"metal/hard rock","precio":30,"fecha":"17/09/2022","lugar":"barcelona","horario":"22:00","edad_min":18,"plazas":650,"img":""},{"id":"concierto 89","titulo":"monasthyr","descr":"monasthyr en vivo en oviedo","tipo_musica":"metal/hard rock","precio":30,"fecha":"28/05/2022","lugar":"oviedo","horario":"22:00","edad_min":18,"plazas":790,"img":""},{"id":"concierto 90","titulo":"redshark","descr":"los barceloneses redshark anuncian la presentación oficial de su nuevo disco digital race en barcelona.","tipo_musica":"metal/hard rock","precio":12,"fecha":"17/06/2022","lugar":"badalona","horario":"21:30","edad_min":18,"plazas":1300,"img":""},{"id":"concierto 91","titulo":"marc anthony","descr":"el artista puertorriqueño visita españa dentro de su nueva gira pa’lla voy tour donde interpreta los temas de su nuevo trabajo además de grandes éxitos","tipo_musica":"latino","precio":50,"fecha":"21/06/2022","lugar":"madrid","horario":"21:30","edad_min":16,"plazas":3000,"img":""},{"id":"concierto 92","titulo":"jose merce","descr":"el famoso cantaor flamenco ofrece un concierto para presentar su vigésimo disco, el oripandó, dentro del universal music festival","tipo_musica":"indie/alternativo/jazz/soul","precio":45,"fecha":"10/07/2022","lugar":"girona","horario":"21:00","edad_min":16,"plazas":230,"img":""},{"id":"concierto 93","titulo":"emir kusturica","descr":"emir kusturica & the no smoking orchestra en vivo","tipo_musica":"indie/alternativo","precio":35,"fecha":"30/06/2022","lugar":"lleida","horario":"21:30","edad_min":16,"plazas":450,"img":""},{"id":"concierto 94","titulo":"swedish house mafia","descr":"la banda de house progresivo regresa a los escenarios con un nuevo disco y una gira europea","tipo_musica":"dance/electronica","precio":40,"fecha":"14/10/2022","lugar":"tarragona","horario":"22:00","edad_min":18,"plazas":700,"img":""},{"id":"concierto 95","titulo":"dead kennedys","descr":"la legendaria banda de punk estadounidense llega a espana en un tour sin precedentes.","tipo_musica":"metal/hard rock","precio":35,"fecha":"13/06/2022","lugar":"toledo","horario":"22:00","edad_min":18,"plazas":800,"img":""},{"id":"concierto 96","titulo":"queralt lahoz","descr":"la música de queralt lahoz está atravesada por los sonidos latinos, de raíz y urbanos","tipo_musica":"jazz/blues","precio":25,"fecha":"25/07/2022","lugar":"sevilla","horario":"21:00","edad_min":16,"plazas":1000,"img":""},{"id":"concierto 97","titulo":"dante","descr":"javier ecay, mas conocido como dante, es una de las voces más prometedoras dentro del rap español.","tipo_musica":"hip-hop/r b","precio":20,"fecha":"20/05/2022","lugar":"malaga","horario":"21:00","edad_min":16,"plazas":2000,"img":""},{"id":"concierto 98","titulo":"xavi sarria","descr":"xavi sarriá presentará su segundo disco","tipo_musica":"pop/rock","precio":25,"fecha":"25/05/2022","lugar":"salamanca","horario":"21:00","edad_min":16,"plazas":3200,"img":""},{"id":"concierto 99","titulo":"newen afrobeat","descr":"el grupo chileno newen afrobeat estarán en concierto en madrid presentando su último disco","tipo_musica":"dance/electronica","precio":30,"fecha":"09/06/2022","lugar":"santander","horario":"21:00","edad_min":16,"plazas":220,"img":""},{"id":"concierto 100","titulo":"foo fighters","descr":"el grupo foo fighters liderado por el ex-nirvana dave grohl, ofrecerán un concierto en madrid","tipo_musica":"pop/rock","precio":40,"fecha":"20/06/2022","lugar":"madrid","horario":"21:00","edad_min":16,"plazas":100,"img":""}];
