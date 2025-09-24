# GitHub Pages 블로그 (Jekyll + Minima)

이 저장소는 GitHub Pages에서 자동으로 빌드되는 Jekyll 블로그입니다. 로컬에서 마크다운(`.md`) 파일만 추가해서 푸시하면, 페이지가 자동 배포됩니다.

## 빠른 시작
- `_posts/` 폴더에 새 글을 추가하고 `main` 브랜치로 푸시합니다.
- GitHub 저장소의 `Settings → Pages`에서 Pages를 활성화합니다.
  - Source가 "GitHub Actions"로 설정되어 있으면, 이 워크플로가 자동으로 배포합니다.
- 첫 배포가 완료되면 Pages URL이 나타납니다. (예: `https://<username>.github.io/<repo>`)

## 글 작성 방법
1. 파일 이름 규칙: `YYYY-MM-DD-슬러그.md`
   - 예: `_posts/2025-09-24-my-first-post.md`
2. 파일 맨 위에 프론트매터를 작성합니다:

```yaml
---
layout: post
title: "글 제목"
categories: [카테고리]
tags: [태그1, 태그2]
---
```

3. 아래에 일반 마크다운으로 본문을 작성합니다.

## 커스터마이징
- 사이트 제목/설명/언어 등: `_config.yml` 수정 (`title`, `description`, `lang`, `timezone` 등)
- 테마: 기본은 `minima`. 다른 테마로 바꾸려면 `_config.yml`의 `theme`를 변경하세요. (GitHub Pages에서 지원되는 테마 권장)

## 로컬 미리보기 (선택)
GitHub가 자동으로 빌드하므로 로컬 실행은 필수 아님입니다. 필요하면 Ruby/Jekyll 환경을 구성하거나 Docker를 사용할 수 있습니다. (이 저장소에는 Gemfile을 포함하지 않았습니다.)

## 커스텀 도메인 (선택)
- 커스텀 도메인을 쓰려면 `Settings → Pages`에서 도메인을 연결하고, 루트에 `CNAME` 파일을 추가하세요.

## 구조
- `_config.yml`: 사이트 기본 설정
- `index.md`: 홈(최근 글 목록)
- `about.md`: 소개 페이지
- `_posts/`: 블로그 글(마크다운)
- `.github/workflows/pages.yml`: GitHub Pages 배포 워크플로우

