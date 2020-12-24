// на проде запрос идет к тому же домену, так как там мы раздаем html с нашего сервера
// локально надо подставлять http://localhost:8080/
// TODO: поправить локальную сборку
export const apiUrl = '';

export const Methods = {
    Get: 'GET',
    Patch: 'PATCH',
    Post: 'POST',
};
