import axiosApi, { baseApi } from "./api";

const jsonType = { "Content-Type": "application/json", }
const multipartType = { "Content-Type": "multipart/form-data"}

const apis = {  
    //로그인
    getKakao : (code: string) => axiosApi.get(`/api/oauth/kakao?code=${code}`),
    getTwitter : (oauth_token: string , oauth_verifier: string) => axiosApi.get(`/api/oauth/twitter?oauth_token=${oauth_token}&oauth_verifier=${oauth_verifier}`),
    postLogout : () => axiosApi.post(`/api/member/logout`),
    getTwitterLogin : () => baseApi.get(`/api/twitter/login`),
    //메인 
    getLiveReviews : () => baseApi.get(`/api/reviews/live`),
    getFetchNotice : (pageNumber: number) => baseApi.get(`/api/notices?size=4&page=${pageNumber}`),
    getPopularMusical : () => baseApi.get(`/api/musicals/popular`),
    getNoticeContents: (noticeId: string) => baseApi.get(`/api/notices/${noticeId}`),
    //마이페이지
    getMyReviewFind : (pageParam: number) => axiosApi.get(`/api/mypage/reviews?size=20&page=${pageParam}`),
    getMyEachReviewFind : (eachMusicalId: string, pageParam: number) => axiosApi.get(`/api/mypage/${eachMusicalId}/reviews?size=20&page=${pageParam}`),
    getMyMusicalFindList : () => axiosApi.get(`/api/mypage/musicals`),
    getMyDetailReview : (getMusicalId: string) => axiosApi.get(`/api/mypage/${getMusicalId}/reviews`),
    postImgUpload : (fd: FileList) => axiosApi.post(`/api/image/upload`, fd, {headers: multipartType}),
    putProfileUpdate : (data: object) => axiosApi.put(`/api/member/update`, JSON.stringify(data), {headers: jsonType}),
    //리뷰 작성
    getTheater: (theaterId: string) => baseApi.get(`/api/theaters/${theaterId}`),
    postImg : (imgFormdata: FileList) => axiosApi.post(`/api/image/upload`, imgFormdata, {headers: multipartType}) ,
    postReview : (musicalId: string, json: string) => axiosApi.post(`/api/musicals/${musicalId}/reviews`, json, { headers: jsonType}),
    getOpenMusical : () => baseApi.get(`/api/musicals/open`),
    getAllMusical : () => baseApi.get(`/api/musicals/all`),
    //리뷰 페이지 
    getMusicalInfo:(musicalId: string) => baseApi.get(`/api/musicals/${musicalId}`),
    getSeat:(theaterId: string) => baseApi.get(`/api/theaters/${theaterId}/seats`),
    getMusicalId : (musicalId: string) => baseApi.get(`/api/musicals/${musicalId}`),
    getTheaterInfo : (theaterId: string) => baseApi.get(`/api/theaters/${theaterId}`),
    getSeatMusical : (musicalId: string) => baseApi.get(`/${musicalId}/seats`),
    getReview : (musicalId: string, pageParam: number, tagUrl: string) => axiosApi.get(`/api/musicals/${musicalId}/reviews?size=15&page=${pageParam}${tagUrl}`),
    getMusicalData : (musical: string) => axiosApi.get(`/api/musicals/${musical}`),
    getTags : (musicalId: string, pageParam: number) => axiosApi.get(`/api/musicals/${musicalId}/reviews?size=15&page=${pageParam}`),
    getFetchTags : (musicalId: string) => baseApi.get(`/api/tags/popular?musicalId=${musicalId}`),
    getResentsSearchList : () => axiosApi.get(`/api/recents/search`),
    deleteResentsSearchList: (dropDownItem: string) => axiosApi.delete(`/api/recents/search`,{data: {recent :dropDownItem}}),
    postSearchCont: (inputValue: string) => axiosApi.post(`/api/recents/search`, {recent: inputValue}),
    //리뷰 디테일
    getReviewDetail :(musicalId: string, reviewsId: string) => axiosApi.get(`/api/musicals/${musicalId}/reviews/${reviewsId}`) ,
    deleteReview: (musicalId: string, reviewsId: string) => axiosApi.delete(`/api/musicals/${musicalId}/reviews/${reviewsId}`),
    postLike : (reviewsId: string) => axiosApi.post(`/api/hearts?reviewId=${reviewsId}`),
    deleteLike : (reviewsId: string) => axiosApi.delete(`/api/hearts?reviewId=${reviewsId}`),
    //리뷰 수정
    postModifyImg : (formData: FileList) => axiosApi.post(`/api/image/upload`,formData, {headers: multipartType}),
    putModify : (musicalId: string, reviewId: string, json: string) => axiosApi.put(`/api/musicals/${musicalId}/reviews/${reviewId}`, json, { headers: jsonType}),
    postComment : (reviewId: string, content: string) => axiosApi.post(`/api/comments?reviewId=${reviewId}`,JSON.stringify(content), {headers: jsonType}),
    getComment : (reviewId: string, pageParam: number) => baseApi.get(`/api/comments?reviewId=${reviewId}&page=${pageParam}`),
    putModifyedComment : (modifyId: string, content: object) => axiosApi.put(`/api/comments/${modifyId}`, JSON.stringify(content), {headers: jsonType}),
    deleteComment : (commentId: string) => axiosApi.delete(`/api/comments/${commentId}`, {headers: jsonType}),
    
}

export default apis