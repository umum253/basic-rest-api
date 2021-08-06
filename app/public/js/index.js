// 即時関数でモジュール化
const indexModule = (() => {
    const path = window.location.pathname

    switch (path) {
        case '/':
            // 検索ボタンをクリックしたときのイベントリスナー設定
            document.getElementById('search-btn').addEventListener('click', () => {
                return searchModule.searchUsers()
            })
            // UsersモジュールのfethAllUsersメソッドを呼び出す
            return usersModule.fetchAllUsers()

        case '/create.html':
            // 保存ボタンをクリックしたときのイベントリスナー設定
            document.getElementById('save-btn').addEventListener('click', () => {
                return usersModule.createUser()
            })
            // キャンセルボタンをクリックしたときのイベントリスナー設定
            document.getElementById('cancel-btn').addEventListener('click', () => {
                return window.location.href = '/'
            })
            break;

        case '/edit.html':
            const uid = window.location.search.split('?uid=')[1]

            // 保存ボタンをクリックしたときのイベントリスナー設定
            document.getElementById('save-btn').addEventListener('click', () => {
                return usersModule.saveUser(uid)
            })
            // キャンセルボタンをクリックしたときのイベントリスナー設定
            document.getElementById('cancel-btn').addEventListener('click', () => {
                return window.location.href = '/'
            })
            // 削除するボタンをクリックしたときのイベントリスナー設定
            document.getElementById('delete-btn').addEventListener('click', () => {
                return usersModule.deleteUser(uid)
            })

            return usersModule.setExistngValue(uid)

        default:
            break;
    }
})()