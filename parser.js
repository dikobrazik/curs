function a(){
    var surnames=['Смирнов', 'Иванов', 'Кузнецов', 'Соколов', 'Попов', 'Лебедев','Козлов', 'Новиков', 'Морозов', 'Петров', 'Волков', 'Соловьёв','Васильев', 'Зайцев', 'Павлов', 'Семёнов', 'Голубев', 'Виноградов','Богданов', 'Воробьёв', 'Фёдоров', 'Михайлов', 'Беляев', 'Тарасов', 'Белов']
  var names = ['Алан', 'Александр', 'Алексей	', 'Альберт', 'Анатолий', 'Андрей', 'Антон', 'Арсен', 'Арсений', 'Артем', 'Артемий', 'Артур', 'Богдан', 'Борис', 'Вадим', 'Валентин', 'Валерий', 'Василий', 'Виктор', 'Виталий', 'Владимир', 'Владислав', 'Всеволод', 'Вячеслав', 'Геннадий', 'Георгий', 'Герман', 'Глеб', 'Гордей', 'Григорий', 'Давид', 'Дамир', 'Даниил', 'Демид', 'Демьян', 'Денис', 'Дмитрий', 'Евгений', 'Егор', 'Елисей', 'Захар', 'Иван', 'Игнат', 'Игорь', 'Илья', 'Ильяс', 'Камиль', 'Карим', 'Кирилл', 'Клим', 'Константин', 'Лев', 'Леонид', 'Макар', 'Максим', 'Марат', 'Марк', 'Марсель', 'Матвей', 'Мирон', 'Мирослав', 'Михаил', 'Назар', 'Никита', 'Николай', 'Олег', 'Павел', 'Петр', 'Платон', 'Прохор', 'Рамиль', 'Ратмир', 'Ринат', 'Роберт', 'Родион', 'Роман', 'Ростислав', 'Руслан', 'Рустам', 'Савва', 'Савелий', 'Святослав', 'Семен', 'Сергей', 'Станислав', 'Степан', 'Тамерлан', 'Тимофей', 'Тимур', 'Тихон', 'Федор', 'Филипп', 'Шамиль', 'Эдуард', 'Эльдар', 'Эмиль', 'Эрик', 'Юрий', 'Ян', 'Ярослав']
  var Wnames = ['Агата', 'Агния', 'Аделина', 'Аида', 'Аксинья', 'Александра', 'Алена', 'Алина', 'Алиса', 'Алия', 'Алла', 'Альбина', 'Амелия', 'Амина', 'Анастасия', 'Ангелина', 'Анна', 'Антонина', 'Ариана', 'Арина', 'Валентина', 'Валерия', 'Варвара', 'Василина', 'Василиса', 'Вера', 'Вероника', 'Виктория', 'Виолетта', 'Владислава', 'Галина', 'Дарина', 'Дарья', 'Диана', 'Дина', 'Ева', 'Евангелина', 'Евгения', 'Екатерина', 'Елена', 'Елизавета', 'Есения', 'Жанна', 'Зарина', 'Злата', 'Илона', 'Инна', 'Ирина', 'Камилла', 'Карина', 'Каролина', 'Кира', 'Клавдия', 'Кристина', 'Ксения', 'Лариса', 'Лейла', 'Лиана', 'Лидия', 'Лилия', 'Лина', 'Лия', 'Любовь', 'Людмила', 'Майя', 'Маргарита', 'Марианна', 'Марина', 'Мария', 'Мелания', 'Мила', 'Милана', 'Милена', 'Мирослава', 'Надежда', 'Наталья', 'Нелли', 'Ника', 'Нина', 'Оксана', 'Олеся', 'Ольга', 'Полина', 'Регина', 'Сабина', 'Светлана', 'София', 'Стефания', 'Таисия', 'Тамара', 'Татьяна', 'Ульяна', 'Эвелина', 'Элина', 'Эльвира', 'Эльмира', 'Эмилия', 'Юлия', 'Яна', 'Ярослава']
  
    function sendData(x1,x2,x3,x4){
      fetch('/csrfToken')
      .then(response => response.json())
      .then(res => {
        msg = {
          data: 
            {
              name:x1,
              surname:x2,
              username:x3,
              password:x4,
            },
          _csrf: res._csrf
        };
        fetch('/user/create',{
          method:'POST',
          body:JSON.stringify(msg),
        })
        .catch(res => console.log(res))
      })
      return [x1,x2,x3,x4];
    }
    var ns = []
    var lol = ''
    for(var i = 0; i < 40; i++){
      if(getRandomInt(0, 1) == 1){
        var nextNS = Wnames[getRandomInt(0, Wnames.length-1)] +' '+ surnames[getRandomInt(0, surnames.length-1)] + 'a';
        if(ns.indexOf(nextNS) == -1) ns.push(nextNS)
        else i--;
      }else{
        var nextNS = names[getRandomInt(0, names.length-1)] +' '+ surnames[getRandomInt(0, surnames.length-1)];
        if(ns.indexOf(nextNS) == -1) ns.push(nextNS)
        else i--;
      }
      d = sendData(ns[ns.length-1].split(' ')[0], ns[ns.length-1].split(' ')[1], transliterate(ns[ns.length-1].replace(' ', '').toLowerCase()), transliterate(ns[ns.length-1].split(' ')[1] + getRandomInt(1111,9999)));
      lol += (d[0] + ' ' + d[1] + ' ' + d[2] + ' ' + d[3] +'\n')
      
    }
    console.log(lol)
    
    
  }
  var transliterate = function(text) {
    text = text
      .replace(/\u0401/g, 'YO')
      .replace(/\u0419/g, 'I')
      .replace(/\u0426/g, 'TS')
      .replace(/\u0423/g, 'U')
      .replace(/\u041A/g, 'K')
      .replace(/\u0415/g, 'E')
      .replace(/\u041D/g, 'N')
      .replace(/\u0413/g, 'G')
      .replace(/\u0428/g, 'SH')
      .replace(/\u0429/g, 'SCH')
      .replace(/\u0417/g, 'Z')
      .replace(/\u0425/g, 'H')
      .replace(/\u042A/g, '')
      .replace(/\u0451/g, 'yo')
      .replace(/\u0439/g, 'i')
      .replace(/\u0446/g, 'ts')
      .replace(/\u0443/g, 'u')
      .replace(/\u043A/g, 'k')
      .replace(/\u0435/g, 'e')
      .replace(/\u043D/g, 'n')
      .replace(/\u0433/g, 'g')
      .replace(/\u0448/g, 'sh')
      .replace(/\u0449/g, 'sch')
      .replace(/\u0437/g, 'z')
      .replace(/\u0445/g, 'h')
      .replace(/\u044A/g, '') //"'")
      .replace(/\u0424/g, 'F')
      .replace(/\u042B/g, 'I')
      .replace(/\u0412/g, 'V')
      .replace(/\u0410/g, 'a')
      .replace(/\u041F/g, 'P')
      .replace(/\u0420/g, 'R')
      .replace(/\u041E/g, 'O')
      .replace(/\u041B/g, 'L')
      .replace(/\u0414/g, 'D')
      .replace(/\u0416/g, 'ZH')
      .replace(/\u042D/g, 'E')
      .replace(/\u0444/g, 'f')
      .replace(/\u044B/g, 'i')
      .replace(/\u0432/g, 'v')
      .replace(/\u0430/g, 'a')
      .replace(/\u043F/g, 'p')
      .replace(/\u0440/g, 'r')
      .replace(/\u043E/g, 'o')
      .replace(/\u043B/g, 'l')
      .replace(/\u0434/g, 'd')
      .replace(/\u0436/g, 'zh')
      .replace(/\u044D/g, 'e')
      .replace(/\u042F/g, 'Ya')
      .replace(/\u0427/g, 'CH')
      .replace(/\u0421/g, 'S')
      .replace(/\u041C/g, 'M')
      .replace(/\u0418/g, 'I')
      .replace(/\u0422/g, 'T')
      .replace(/\u042C/g, '') //"'")
      .replace(/\u0411/g, 'B')
      .replace(/\u042E/g, 'YU')
      .replace(/\u044F/g, 'ya')
      .replace(/\u0447/g, 'ch')
      .replace(/\u0441/g, 's')
      .replace(/\u043C/g, 'm')
      .replace(/\u0438/g, 'i')
      .replace(/\u0442/g, 't')
      .replace(/\u044C/g, '') //"'")
      .replace(/\u0431/g, 'b')
      .replace(/\u044E/g, 'yu');

  return text;
  };
  // var a= ''
  // for(var i = 0; i < 4; i++){
  //   td = document.getElementsByTagName('td')[i];
  //   for(var p = 0; p < 25; p++){
  //     a += "'"+td.getElementsByTagName('p')[p].getElementsByTagName('a')[0].innerHTML+"', "
  //   }
  // }