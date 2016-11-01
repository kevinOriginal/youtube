#Youtube app!

Made on 'create-react-app' boilerplate

No Redux used. React only.
Used Youtube api for searching and fetching videos

결과물을 먼저 본다음에 차근 차근 따라해보면서 직접 만들어 보자.


1. 검색을 하고 굳이 엔터를 누를 필요 없이 잠깐의 딜레이 후 바로 서버로 부터 요청을 가져온다.
2. 왼쪽에 있는 영상 5개는 검색결과 중 가장 근접한 결과 5개를 보여주며, 가장 크게 뜨는 영상은 맨 첫번째 영상이다.
3. 영상 하단에 있는 부분은 영상에 대한 설명이다.
4. 반응형이며 Bootstrap이 쓰였다.
5. 시작하기

- `cd youtube`

- `npm install`

- `npm run start`

# 만드는 순서에 대해 알아보자.
### 한번에 다 하려면 힘드니까 단계를 나눠보았다. 한단계씩 차근차근하자. checkout으로 단계별로 branch를 구성하려했으나 과제에 치어서 그건 나중에 하겠다...

1. 완성된 파일을 보고 Structure 을 잡는다.
 - src 폴더 안에 components 폴더와 index.js 를 만들었다.
 - 각 components가 stateless 한지 state based 인지 한 번 생각을 해본다.
 - 총 5개의 컴포넌트로 구성이 된다.

2. SearchBar의 틀을 잡고(아직 검색기능은 생략한다) App과 연결 시킨다. 또한 SearchBar 내의 state를 완성한다.

3. SearchBar를 통해서 App의 state 중 videos[]배열 안에 값 넣기

4. VideoList 컴포넌트를 실제로 짜고 App으로 부터 받은 데이터를 바탕을 map을 한다. App과 연결하는 것이 관건..

5. main player를 iframe에 넣고 view에 나오게 시킨다.

6. selecting a video with callback(여기서 부터 어려움)

7. searching videos with callback

8. styling
