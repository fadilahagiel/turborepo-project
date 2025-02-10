"use client";

import Header from "@/components/organisms/Header";
import Table from "@/components/organisms/Table";
import { fetchUsersAction } from "@/store/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "@/store/store";
import ErrorText from "@/components/atoms/ErrorText";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  useEffect(() => {
    handleFetchUsers();
  }, [dispatch]);
  const handleFetchUsers = async () => {
    await dispatch(fetchUsersAction());
  };
  return (
    <div className="min-h-screen gap-16 px-20 mt-16 bg-[background-color:var(--background-color]">
      <main className="flex flex-col gap-8 justify-items-center items-center w-full">
        <Header title="Users List"/>
        {error ? (
          <ErrorText text={error} />
        ) : loading ? (
          <CircularProgress />
        ) : (
          <Table users={users} />
        )}
      </main>
    </div>
  );
}
