/**
 * Проверяет, является ли объект пустым.
 * @param {Object} obj - Объект для проверки.
 * @returns {boolean} - Возвращает true, если объект пустой, и false в противном случае.
 */
function isEmpty(obj) {
            return Reflect.ownKeys(obj).length === 0;
        }


/**
 * Проверяет, является ли глобальный объект testObj пустым и отображает результат.
 */
 function checkEmpty() {
            const res = isEmpty(testObj);
            document.getElementById('result').textContent = `Объект пуст? ${res}`;
        }


/**
 * Добавляет класс к объекту obj и отображает его текущее имя класса.
 */
 function addClass() {
            const cls = document.getElementById('classToAdd').value.trim();
            if (cls) {
                obj.addClass(cls);
                document.getElementById('result').textContent = obj.className;
            }
        }


/**
 * Удаляет класс из объекта obj и отображает его текущее имя класса.
 */
function removeClass() {
    const cls = document.getElementById('classToRemove').value.trim();
        if (cls) {
            obj.removeClass(cls);
            document.getElementById('result').textContent = obj.className;
         }
}


/**
 * Сравнивает два объекта на глубокое равенство.
 * @param {*} a - Первый объект для сравнения.
 * @param {*} b - Второй объект для сравнения.
 * @returns {boolean} - Возвращает true, если объекты равны, и false в противном случае.
 */
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== 'object' || typeof b !== 'object' || a == null || b == null) return false;
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}

/**
 * Преобразует объект obj в JSON строку и проверяет равенство исходного объекта и восстановленного.
 */
function doJson() {
    const jsonStr = JSON.stringify(obj, null, 2);
    const obj2 = JSON.parse(jsonStr);
    const equal = deepEqual(obj, obj2);
   document.getElementById('result').textContent = `JSON строка:\n${jsonStr}\n\nОбъекты равны: ${equal}`;
}


/**
 * Возвращает количество секунд, прошедших с начала текущего дня.
 * @returns {number} - Количество секунд с начала дня.
 */
function getSecondsToday() {
            const now = new Date();
            const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            return Math.floor((now - start) / 1000);
        }

/**
 * Форматирует дату в строку формата ДД.ММ.ГГ.
 * @param {Date} date - Дата для форматирования.
 * @returns {string} - Строка с отформатированной датой.
 */
function formatDate(date) {
            const dd = String(date.getDate()).padStart(2, '0');
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const yy = String(date.getFullYear()).slice(-2);
            return `${dd}.${mm}.${yy}`;
        }


/**
 * Отображает отформатированную дату на основе введенной пользователем даты.
 */
        function showFormattedDate() {
            const val = document.getElementById('dateInput').value;
            if (!val) {
                alert('Выберите дату');
                return;
            }
            const date = new Date(val);
            document.getElementById('result').textContent = formatDate(date);
        }