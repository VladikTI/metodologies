## Демонстрация работы
[![asciicast](https://asciinema.org/a/5XMLyvxozaWMoqE04lEOuiM3h.svg)](https://asciinema.org/a/5XMLyvxozaWMoqE04lEOuiM3h)

[![Maintainability](https://api.codeclimate.com/v1/badges/0dccc2590b25d76abb77/maintainability)](https://codeclimate.com/github/AnzenFroud/development_methodologies/maintainability)

















[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6OB9WcGd)
1) Настройка окружения (обязательно только для тех, кто пишет на JS).
1.	Инициализируйте ваш npm-пакет внутри корневой директории проекта, используя команду npm init. При инициализации задайте имя пакета - @misis/code.
2.	Создайте директорию bin и добавьте в неё файл menu-game.js.
3.	Сделайте так, чтобы запуск файла bin/menu-game.js выводил на экран строку:
node bin/menu-game.js
Choose the game!
4.	Добавьте в package.json секцию "type" со значением "module". 
5.	Создайте Makefile с командой install, выполняющей npm ci. Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
6.	Добавьте директорию node_modules в файл .gitignore. Зависимости не хранят в репозитории.
7.	Добавьте в Makefile команду menu-game:
node bin/menu-game.js

2) Публикация (обязательно только для тех, кто пишет на JS):
1.	Пропишите в начале файла menu-game.js шебанг с правильно указанным интерпретатором (node) — #!/usr/bin/env node. 
2.	Добавьте запись в секцию bin в package.json:
"bin": {
  "brain-games": "bin/menu-game.js"
}
3.	Добавьте файлу bin/menu-game.js права на исполнение, выполнив в корневой директории проекта команду chmod +x bin/menu-game.js. Это позволит запускать исполняемый файл напрямую из консоли без указания интерпретатора (node) - ./bin/menu-game.js.
4.	Добавьте в Makefile команду publish, которая выполнит npm publish --dry-run.
5.	Проведите отладку публикации пакета. Если в процессе выполнения будут получены ошибки или предупреждения, исправьте их.
6.	Установите пакет в систему с помощью npm link и убедитесь в том, что он работает, запустив menu-game в терминале. Команда npm link может потребовать запуск с sudo и флаг --force.
7.	Запушьте изменения в репозиторий на гитхабе.
   
3) Создание приветствия (желательно сделать до написания игр)
1.	Подключите библиотеку readline-sync (для ввода-вывода на JS).
2.	Поприветствуйте пользователя в игре. Спросите у пользователя его имя и поприветствуйте его по имени:
Welcome to the Brain Games!
May I have your name? John
Hello, John!

После чего программа завершается.
Ниже пример того, как можно запросить у пользователя любую информацию:
          import readlineSync from 'readline-sync';

          const name = readlineSync.question('Your answer: ');

Код, реализующий этот функционал, должен быть в файле src/cli.js относительно директории проекта, а в исполняемом файле bin/brain-games.js сделайте вызов. Для этого код нужно поместить в функцию и импортировать ее в исполняемый файл.
3.	Проведите отладку публикации новой версии пакета (обязательно только для тех, кто пишет на JS).

4) Настройка линтера. (Доп.задание лучше сделать, описание приведено только для JS, если у вас другой язык, посмотрите, как это сделать)
1.	Установите следующие пакеты: eslint, eslint-config-airbnb-base, eslint-plugin-import
2.	Настройте правильно .eslintrc.yml. Документация: https://eslint.org/docs/user-guide/configuring. Сверяйтесь с nodejs-package
3.	Создайте задачу make lint, которая должна запускать npx eslint .
4.	Подключите eslint к своему редактору, убедитесь что все работает. Скорее всего, понадобится поставить eslint глобально
5.	Исправьте все ошибки, которые выдает линтер. Отключите правила no-console (оно не актуально для nodejs разработки) и import/extensions (чтобы получить возможность указывать при импорте файлы с расширением)

5) Игра "НОК"
Необходимо реализовать игру "наименьшее общее кратное (НОК)". Суть игры в следующем: пользователю показывается три случайных числа, например, 5 7 15. Пользователь должен вычислить и ввести наименьшее общее кратное этих чисел.
Вывод должен получиться следующий:
brain-scm

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the smallest common multiple of given numbers.
Question: 5 7 15
Your answer: 105
Correct!
Question: 100 50 1
Your answer: 100
Correct!
Question: 3 9 27
Your answer: 27
Correct!
Congratulations, Sam!
В случае, если пользователь даст неверный ответ, необходимо вывести:
Question: 5 10 25
Your answer: 15
'15' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!

6) Игра "Геометическая прогрессия"
Показываем игроку ряд чисел, образующий геометрическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.
•	Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5 чисел
•	Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом)
Пример:
brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 1 2 4 8  .. 32 64 128
Your answer: 16
Correct!
Question: 1 3 9 27 ..
Your answer: 81
Correct!
Question: 5 25 .. 625 3125
Your answer: 125
Correct!
Congratulations, Sam!
В случае, если пользователь даст неверный ответ, необходимо вывести:
Question: 4 16 64 .. 1024 4096
Your answer:  1
'1' is wrong answer ;(. Correct answer was '256'.
Let's try again, Sam!
Задачи
1.	Добавьте в директорию bin новый исполняемый файл с названием brain-progression.js
2.	Реализуйте необходимую логику для работы игры
3.	Добавьте ещё одну запись в секцию bin в package.json (только для тех, кто выполняет публикацию)
4.	Проверьте работоспособность новой игры
5.	Добавьте в README.md аскинему с запуском и демонстрацией различных исходов игры (дополнительное задание за доп.баллы)
6.  Вы заметили, что игры имеют общую логику. Необходимо выполнить рефакторинг, в результате которого общая логика будет находиться в одном файле, очень хорошо, если реализуете движок для игр, в который будете передавать функции, с уникальным кодом для каждой игры, запуская их в движке. Все функции с побочными эффектами лучше оставить в файлах с играми, и не писать их в движке.