"use client";

import { User } from "@/apis/user";
import EditForm from "@/components/organisms/EditForm";
import Header from "@/components/organisms/Header";
import { fetchUserAction, updateUserAction } from "@/store/actions";
import { RootState } from "@/store/store";
import { CircularProgress } from "@mui/material";
import { AnyAction } from "@reduxjs/toolkit";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export default function Edit() {
  const { userSelected, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>();
  const userId = useParams().id?.toString();
  const router = useRouter();
  useEffect(() => {
    handleFetchUsers();
  }, [dispatch, userId]);

  const handleFetchUsers = async () => {
    if (userId) {
      await dispatch(fetchUserAction(userId));
    }
  };

  const submitEdit = async (user: User) => {
    dispatch(updateUserAction(user)).then(() => {
      router.push("/home");
    });
  };

  return (
    <div className="min-h-screen gap-16 px-20 mt-16 bg-[background-color:var(--background-color]">
      <main className="flex flex-col gap-8 justify-items-center items-center w-full">
        <Header title="Edit Page" />
        {loading ? (
          <CircularProgress/>
        ) : (
          <EditForm user={userSelected} submitEdit={submitEdit} error={error} />
        )}
      </main>
    </div>
  );
}
