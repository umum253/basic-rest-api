// 即時関数でモジュール化
const searchModule = (() => {
    const BASE_URL = "http://localhost:3000/api/v1/search"

    return {
        searchUsers: async () => {
            // 検索窓への入力値を取得
            const query = document.getElementById('search').value

            // fetchはGETメソッドを非同期で実行するメソッド、async-awaitで実行を待つ
            const res = await fetch(BASE_URL + "?q=" + query)
            // fetchで受け取ったレスポンスはjsonなのでパースしてJSのオブジェクト型(配列)として扱う
            const result  = await res.json()

            let body = ""

            for (let i=0; i < result.length; i++) {
                const user = result[i]
                body += `<tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.profile}</td>
                            <td>${user.date_of_birth}</td>
                            <td>${user.created_at}</td>
                            <td>${user.update_at}</td>
                        </tr>`
            }

            // 指定したidのタグをbodyで置き換えるDOM操作
            document.getElementById('users-list').innerHTML = body
        }
    }
})()